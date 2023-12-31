"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsightReportUserController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let InsightReportUserController = exports.InsightReportUserController = class InsightReportUserController {
    constructor(insightReportRepository) {
        this.insightReportRepository = insightReportRepository;
    }
    async getUser(id) {
        return this.insightReportRepository.user(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/insight-reports/{id}/user', {
        responses: {
            '200': {
                description: 'User belonging to InsightReport',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.User),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InsightReportUserController.prototype, "getUser", null);
exports.InsightReportUserController = InsightReportUserController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.InsightReportRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.InsightReportRepository])
], InsightReportUserController);
//# sourceMappingURL=insight-report-user.controller.js.map