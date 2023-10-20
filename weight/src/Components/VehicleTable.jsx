import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

const VehicleTable = () => {
  const columns = [
    {
      field: "weighttype",
      headerName: "Weight Type",
      flex: 1,
      headerAlign: "center",
      align: "left",
    },
    {
      field: "vehicleno",
      headerName: "Vehicle No.",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "vehicletype",
      headerName: "Vehicle Type",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "supplier",
      headerName: "Supplier",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "receipt",
      headerName: "Receipt",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (cellValues) => {
        return (
          <button>
            <ReceiptLongOutlinedIcon style={{ color: "#6759FF" }} />
          </button>
        );
      },
    },
  ];

  const rows = [
    {
      id:1,
      weighttype: "#3d7",
      vehicleno: 54,
      slipno: 71,
      weightdate: "6/13/2023",
      vehicletype: "CNY",
      supplier: "Finance",
      charges: 55,
      netweight: 91,
      measuretype: 2006,
      receipt: "Andalax",
    },
    {
        id:2,
        weighttype: "#3d7",
        vehicleno: 54,
        slipno: 71,
        weightdate: "6/13/2023",
        vehicletype: "CNY",
        supplier: "Finance",
        charges: 55,
        netweight: 91,
        measuretype: 2006,
        receipt: "Andalax",
      },
      {
        id:3,
        weighttype: "#3d7",
        vehicleno: 54,
        slipno: 71,
        weightdate: "6/13/2023",
        vehicletype: "CNY",
        supplier: "Finance",
        charges: 55,
        netweight: 91,
        measuretype: 2006,
        receipt: "Andalax",
      },
      {
        id:4,
        weighttype: "#3d7",
        vehicleno: 54,
        slipno: 71,
        weightdate: "6/13/2023",
        vehicletype: "CNY",
        supplier: "Finance",
        charges: 55,
        netweight: 91,
        measuretype: 2006,
        receipt: "Andalax",
      },
      {
        id:5,
        weighttype: "#3d7",
        vehicleno: 54,
        slipno: 71,
        weightdate: "6/13/2023",
        vehicletype: "CNY",
        supplier: "Finance",
        charges: 55,
        netweight: 91,
        measuretype: 2006,
        receipt: "Andalax",
      },
      {
        id:6,
        weighttype: "#3d7",
        vehicleno: 54,
        slipno: 71,
        weightdate: "6/13/2023",
        vehicletype: "CNY",
        supplier: "Finance",
        charges: 55,
        netweight: 91,
        measuretype: 2006,
        receipt: "Andalax",
      },
      {
        id:7,
        weighttype: "#3d7",
        vehicleno: 54,
        slipno: 71,
        weightdate: "6/13/2023",
        vehicletype: "CNY",
        supplier: "Finance",
        charges: 55,
        netweight: 91,
        measuretype: 2006,
        receipt: "Andalax",
      },
      {
        id:8,
        weighttype: "#3d7",
        vehicleno: 54,
        slipno: 71,
        weightdate: "6/13/2023",
        vehicletype: "CNY",
        supplier: "Finance",
        charges: 55,
        netweight: 91,
        measuretype: 2006,
        receipt: "Andalax",
      },
      {
        id:9,
        weighttype: "#3d7",
        vehicleno: 54,
        slipno: 71,
        weightdate: "6/13/2023",
        vehicletype: "CNY",
        supplier: "Finance",
        charges: 55,
        netweight: 91,
        measuretype: 2006,
        receipt: "Andalax",
      },
      {
        id:10,
        weighttype: "#3d7",
        vehicleno: 54,
        slipno: 71,
        weightdate: "6/13/2023",
        vehicletype: "CNY",
        supplier: "Finance",
        charges: 55,
        netweight: 91,
        measuretype: 2006,
        receipt: "Andalax",
      },
      {
        id:11,
        weighttype: "#3d7",
        vehicleno: 54,
        slipno: 71,
        weightdate: "6/13/2023",
        vehicletype: "CNY",
        supplier: "Finance",
        charges: 55,
        netweight: 91,
        measuretype: 2006,
        receipt: "Andalax",
      },
      {
        id:12,
        weighttype: "3d7",
        vehicleno: 54,
        slipno: 71,
        weightdate: "6/13/2023",
        vehicletype: "CNY",
        supplier: "Finance",
        charges: 55,
        netweight: 91,
        measuretype: 2006,
        receipt: "Andalax",
      },
  ];

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
          },
        }}
      />
    </div>
  );
};

export default VehicleTable;
