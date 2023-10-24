import { createTheme } from "@mui/material/styles";

const muitheme = createTheme({
  palette: {
    primary: {
      main: "#6759FF",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: 16.5,
  },
  //   components: {
  //     MuiDataGrid: {
  //       styleOverrides: {
  //         columnHeader: {
  //           '@media (min-width:640px)': {
  //           fontSize: 17.5,
  //         },
  //       },
  //     },
  //   },
  // });

  components: {
    MuiDataGrid: {
      styleOverrides: {
        columnHeader: {
          "@media (min-width:640px)": {
            fontSize: 10.5,
          },
          "@media (min-width:768px)": {
            fontSize: 13.5,
          },
          "@media (min-width:1700px)": {
            fontSize: 16.5,
          },
          "@media (min-width:2500px)": {
            fontSize: 22.5,
          },
          "@media (min-width:3500px)": {
            fontSize: 26.5,
          },
        },
        cell: {
          "@media (min-width:640px)": {
            fontSize: 9.5,
          },
          "@media (min-width:768px)": {
            fontSize: 12.5,
          },
          "@media (min-width:1700px)": {
            fontSize: 15.5,
          },
          "@media (min-width:2500px)": {
            fontSize: 21.5,
          },
          "@media (min-width:3500px)": {
            fontSize: 25.5,
          },
        },
      },
    },
  },
});

export default muitheme;
