import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import { fetchWeightTracker } from "../redux_store/slice/weightTrackerSlice";
import { weightTrackerData } from "../redux_store/slice/weightTrackerSlice";
import { useSelector, useDispatch } from "react-redux";

const WeightTable = () => {
  const columns = [
    {
      field: "weighttype",
      headerName: "Weight Type",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "vehicleno",
      headerName: "Vehicle No.",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "slipno",
      headerName: "Slip No.",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "weightdate",
      headerName: "Weight Date",
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
      field: "charges",
      headerName: "Charges",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "netweight",
      headerName: "Net Weight",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "measuretype",
      headerName: "Measure Type",
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
          <a href="https://example.com">
            <ReceiptLongOutlinedIcon style={{ color: "#6759FF" }} />
          </a>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
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
      id: 2,
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

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchWeightTracker());
  }, []);

  const weightData = useSelector(weightTrackerData);

  const formatDateToDDMMYYYY = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const weightMappedData = weightData.map((item) => ({
    id: item.weighingDataId,
    weighttype: item.weightType,
    vehicleno: item.vehicleNumber,
    slipno: item.slipNumber,
    weightdate: formatDateToDDMMYYYY(new Date(item.createdAt)),
    vehicletype: item.vehicleType,
    supplier: item.supplier,
    charges: item.charges,
    netweight: item.netWeight,
    measuretype: item.measureType,
    receipt: item.receiptUrl,
  }));

  return (
    <div style={{ height: "100%" }} className="mx-20">
      <DataGrid
        rows={weightMappedData}
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

export default WeightTable;
