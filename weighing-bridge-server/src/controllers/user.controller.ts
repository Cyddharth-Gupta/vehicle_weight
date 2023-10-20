import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import * as Jwt from "jsonwebtoken";
import AWS from 'aws-sdk';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {User} from '../models';
import {UserRepository, UserSessionRepository} from '../repositories';

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository : UserRepository,
    @repository(UserSessionRepository)
    public userSessionRepository : UserSessionRepository,
  ) {}

  @post('/users')
  @response(200, {
    description: 'User model instance',
    content: {'application/json': {schema: getModelSchemaRef(User)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUser',
            
          }),
        },
      },
    })
    user: User,
  ): Promise<User> {
    return this.userRepository.create(user);
  }

  @get('/users/count')
  @response(200, {
    description: 'User model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(User) where?: Where<User>,
  ): Promise<Count> {
    return this.userRepository.count(where);
  }

  @get('/users')
  @response(200, {
    description: 'Array of User model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(User, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(User) filter?: Filter<User>,
  ): Promise<User[]> {
    return this.userRepository.find(filter);
  }

  @patch('/users')
  @response(200, {
    description: 'User PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: User,
    @param.where(User) where?: Where<User>,
  ): Promise<Count> {
    return this.userRepository.updateAll(user, where);
  }

  @get('/users/{id}')
  @response(200, {
    description: 'User model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(User, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(User, {exclude: 'where'}) filter?: FilterExcludingWhere<User>
  ): Promise<User> {
    return this.userRepository.findById(id, filter);
  }

  @patch('/users/{id}')
  @response(204, {
    description: 'User PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: User,
  ): Promise<void> {
    await this.userRepository.updateById(id, user);
  }

  @put('/users/{id}')
  @response(204, {
    description: 'User PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() user: User,
  ): Promise<void> {
    await this.userRepository.replaceById(id, user);
  }

  @del('/users/{id}')
  @response(204, {
    description: 'User DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userRepository.deleteById(id);
  }

  @post('/users/login')
  @response(200, {
    description: 'Login Otp is sent.',
    content: {'application/json': {schema: {token: 'string'}}},
  })
  async login(
    @requestBody() payload: {
      username: string,
      password: string
    },
  ): Promise<object> {
    const user = await this.userRepository.findOne({
      where: {
        username: payload.username,
        password: payload.password
      }
    });

    if (user) {
      const token = Jwt.sign({username: user.username, employeeId: user.employeeId}, 'WeighingBridgeServer')
      await this.userSessionRepository.create({
        userId: user.userId,
        token: token
      });

      return {
        description: 'User is logged in.',
        data: {token: token, userId: user.userId, isUserRegistered: true, userData: user},
      }
    } else {
      return {
        description: 'Either Username or password is incorrect.',
        isUserRegistered: false
      }
    }
  }

  //@authenticate("jwt")
  @post('/users/logout')
  @response(200, {
    description: 'User is Logged Out'
  })
  async logout(
    @requestBody() payload: {
      userId: string
    },
  ): Promise<object> {
    const userSession = await this.userSessionRepository.findOne({
      where: {
        userId: payload.userId,
      }
    });

    if (userSession) {
      await this.userSessionRepository.updateById(userSession.userSessionId, {isTokenExpired: true})
      return {
        description: 'User is Logged Out',
      }
    } else {
      return {
        description: 'User is invalid',
      }
    }
  }

  @post('/file/upload')
  @response(200, {
    description: 'File is uploaded'
  })
  async upload(
    @requestBody() payload: {
      fileName: string,
      fileData: string,
      fileType: string,
      fileExtension: string
    },
  ): Promise<object> {
    const config = {
      accessKeyId: 'AKIA5R6PRO3WQXNRZFZO',
      secretAccessKey: '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',
    }
    const s3 = new AWS.S3(config);
    let buffer;
    if(payload.fileType === 'csv'){
      buffer = Buffer.from(payload.fileData.replace(/^data:csv\/\w+;base64,/, ""), 'base64')
    }else if(payload.fileType === 'image'){
      buffer = Buffer.from(payload.fileData.replace(/^data:image\/\w+;base64,/, ""), 'base64')
    }

    const uploadedImage = await s3.upload({
      Bucket: 'weighing-bridge-resources',
      Key: `${payload.fileName}.${payload.fileExtension}`,
      Body: buffer,
      ContentEncoding: 'base64',
      ContentType: `${payload.fileType}/${payload.fileExtension}`
    }).promise()

    if (uploadedImage.Location) {
      return {
        description: 'File is uploaded.',
        fileUrl: uploadedImage.Location
      }
    } else {
      return {
        description: 'There is some error occured.',
        error: uploadedImage
      }
    }
  }
}
