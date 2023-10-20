import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import DateTimeInput from './DateTimeInput';

const VehicleTable = () => {
  const columns = [
    {
      field: "vehicleId",
      headerName: "Vehicle ID",
      flex: 1,
      headerAlign: "center",
      align: "left",
      type:"number",
      maxLength:"20",
    },
    {
      field: "rfidNumber",
      headerName: "RFID Number",
      flex: 1,
      headerAlign: "center",
      align: "center",
      type:"number",
      maxLength:"20",
    },
    {
      field: "vehicleNumber",
      headerName: "Vehicle Number",
      flex: 1,
      headerAlign: "center",
      align: "center",
      type:"text",
      maxLength:"20",
    },
    {
      field: "vehicleType",
      headerName: "Vehicle Type",
      flex: 1,
      headerAlign: "center",
      align: "center",
      type:"text",
      maxLength:"20",
    },
    {
      field: "tareWeight",
      headerName: "Tare Weight",
      flex: 1,
      headerAlign: "center",
      align: "center",
      type:"number",
      maxLength:"20",
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
      headerAlign: "center",
      align: "center",
      type:"date_time",
      maxLength:"20",
      renderCell: (params) => {
        return (
          <DateTimeInput
            value={params.value}
            onDateChange={(date) => {
              // Handle date change here
              console.log(date);
            }}
          />
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
