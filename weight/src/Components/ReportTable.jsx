import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Avatar from "@mui/material/Avatar";
import priyanka from "../assets/priyanka.jpg";
import naruto from "../assets/naruto.jpg";
import sakura from "../assets/sakura.jpg";


const columns = [
  {
    field: "employeeid",
    headerName: "Employee ID",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "username",
    headerName: "Username",
    renderCell: (params) => {
      console.log(params);
      return (
        <>
          <Avatar src={params.row.avatar} />
          <div className="ml-2"> {params.row.name} </div>
        </>
      );
    },
    flex:1,
    headerAlign: "center",
    align: "left",
  },
  {
    field: "dob",
    headerName: "Date Of Birth",
    flex: 1,
    type: Date,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "zone",
    headerName: "Zone",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "new",
    headerName: "New",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return (
        <div
          className={
            params.value === "Inactive"
              ? "bg-red-200 text-red-800 rounded-3xl py-3 px-6"
              : "bg-green-200 text-green-800 rounded-3xl py-3 px-6"
          }
        >
          {params.value}
        </div>
      );
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    headerAlign: "center",
    align: "center",
    renderCell: (cellValues) => {
        return (
          <button>
            <FileDownloadOutlinedIcon style={{ color: "#6759FF" }} />
          </button>
        );
      },
  },
];

const rows = [
  {
    id: 1,
    avatar: priyanka,
    name: "Priyanka",
    zone: "East",
    employeeid: 35,
    dob: "3/5/10" ,
    new: "New",
    status: "Inactive",
    actions: "some actions",
  },
  {
    id: 2,
    avatar: naruto,
    name: "John Cena",
    managedby: "Lannister",
    zone: "East",
    employeeid: 42,
    dob: "3/5/10" ,
    new: "New",
    status: "Active",
    actions: "some actions",
  },
  {
    id: 3,
    avatar: sakura,
    name: "Shah rukh khan",
    managedby: "Lannister",
    zone: "East",
    employeeid: 45,
    dob: "3/5/10" ,
    new: "New",
    status: "Inactive",
    actions: "some actions",
  },
  {
    id: 4,
    avatar: sakura,
    name: "Siddharth Malhotra",
    managedby: "Stark",
    zone: "West",
    age: 16,
    employeeid: 68,
    dob: "3/5/10" ,
    new: "New",
    status: "Inactive",
    actions: "some actions",
  },
  {
    id: 5,
    avatar: naruto,
    name: "Ronaldo",
    managedby: "Targaryen",
    zone: "West",
    employeeid: 268,
    dob: "3/5/10" ,
    new: "New",
    status: "Active",
    actions: "some actions",
  },
  {
    id: 6,
    avatar: sakura,
    name: "Christopher Nolan",
    managedby: "Melisandre",
    zone: "West",
    employeeid: 150,
    dob: "3/5/10" ,
    new: "New",
    status: "Active",
    actions: "some actions",
  },
  {
    id: 7,
    avatar: priyanka,
    name: "Spider Man",
    managedby: "Clifford",
    zone: "West",
    employeeid: 44,
    dob: "3/5/10" ,
    new: "New",
    status: "Active",
    actions: "some actions",
  },
  {
    id: 8,
    avatar: naruto,
    name: "Minato",
    managedby: "Frances",
    zone: "East",
    employeeid: 36,
    dob: "3/5/10" ,
    new: "New",
    status: "Active",
    actions: "some actions",
  },
  {
    id: 9,
    avatar: sakura,
    name: "Kushina",
    managedby: "Roxie",
    zone: "West",
    employeeid: 65,
    dob: "3/5/10" ,
    new: "New",
    status: "Active",
    actions: "some actions",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: "100%" }} className="mx-20">
      <DataGrid
        rows={rows}
        rowHeight={80}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{
          "&, [class^=MuiDataGrid]": { border: "none" },

          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "1px solid #967BB6",
          },

          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
          }
        }}
      />
    </div>
  );
}
