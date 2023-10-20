import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Avatar from "@mui/material/Avatar";
import priyanka from "../assets/priyanka.jpg";
import naruto from "../assets/naruto.jpg";
import sakura from "../assets/sakura.jpg";
import { zoneTrackerData } from "../redux_store/slice/zoneTrackerSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchZoneTracker } from "../redux_store/slice/zoneTrackerSlice";

const columns = [
  {
    field: "managedby",
    headerName: "Managed By",
    renderCell: (params) => {
      console.log(params);
      return (
        <>
          <Avatar src={params.row.avatar} />
          <div className="ml-2"> {params.row.name} </div>
        </>
      );
    },
    flex: 1,
    headerAlign: "center",
    align: "left",
  },
  {
    field: "zone",
    headerName: "Zone",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "state",
    headerName: "State",
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
          <BorderColorOutlinedIcon style={{ color: "#6759FF" }} />
        </button>
      );
    },
  },
];

// const rows = [
//   {
//     id: 1,
//     avatar: priyanka,
//     name: "Priyanka",
//     zone: "Jon",
//     address: 35,
//     city: "New Delhi",
//     state: "Delhi",
//     status: "Inactive",
//     actions: "some actions",
//   },
//   {
//     id: 2,
//     avatar: naruto,
//     name: "John Cena",
//     managedby: "Lannister",
//     zone: "Cersei",
//     address: 42,
//     city: "New Delhi",
//     state: "Delhi",
//     status: "Active",
//     actions: "some actions",
//   },
//   {
//     id: 3,
//     avatar: sakura,
//     name: "Shah rukh khan",
//     managedby: "Lannister",
//     zone: "Jaime",
//     address: 45,
//     city: "New Delhi",
//     state: "Delhi",
//     status: "Inactive",
//     actions: "some actions",
//   },
//   {
//     id: 4,
//     avatar: sakura,
//     name: "Siddharth Malhotra",
//     managedby: "Stark",
//     zone: "Arya",
//     age: 16,
//     address: 68,
//     city: "New Delhi",
//     state: "Delhi",
//     status: "Inactive",
//     actions: "some actions",
//   },
//   {
//     id: 5,
//     avatar: naruto,
//     name: "Ronaldo",
//     managedby: "Targaryen",
//     zone: "Daenerys",
//     address: 268,
//     city: "New Delhi",
//     state: "Delhi",
//     status: "Active",
//     actions: "some actions",
//   },
//   {
//     id: 6,
//     avatar: sakura,
//     name: "Christopher Nolan",
//     managedby: "Melisandre",
//     zone: "Priyanka",
//     address: 150,
//     city: "New Delhi",
//     state: "Delhi",
//     status: "Active",
//     actions: "some actions",
//   },
//   {
//     id: 7,
//     avatar: priyanka,
//     name: "Spider Man",
//     managedby: "Clifford",
//     zone: "Ferrara",
//     address: 44,
//     city: "New Delhi",
//     state: "Delhi",
//     status: "Active",
//     actions: "some actions",
//   },
//   {
//     id: 8,
//     avatar: naruto,
//     name: "Minato",
//     managedby: "Frances",
//     zone: "Rossini",
//     address: 36,
//     city: "New Delhi",
//     state: "Delhi",
//     status: "Active",
//     actions: "some actions",
//   },
//   {
//     id: 9,
//     avatar: sakura,
//     name: "Kushina",
//     managedby: "Roxie",
//     zone: "Harvey",
//     address: 65,
//     city: "New Delhi",
//     state: "Delhi",
//     status: "Active",
//     actions: "some actions",
//   },
// ];

export default function ZoneTrackerTable() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchZoneTracker());
  }, []);

  const zoneTracker = useSelector(zoneTrackerData);
  

  const mappedData = zoneTracker.map((item) => ({
    id: item.userId,
    avatar: "",
    name: item.user.fullName,
    zone: item.name,
    address: item.address,
    city: item.city,
    state: item.state,
    status: item.status,
    actions: "some actions",
  }));

  return (
    <div style={{ height: "100%" }} className="mx-20">
      <DataGrid
        rows={mappedData}
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
          },
        }}
      />
    </div>
  );
}
