"use client";
import { ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#87cefa",
    },
    secondary: {
      main: "#aff6ff",
    },
    error: {
      main: "#ff0707",
    },
  },
  typography: {
    fontFamily: '"BedSteadRegular", sans-serif',
    fontWeightRegular: 500,
    fontSize: 20,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: "1.5px",
        },
      },
    },
    // MuiInput: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "white",
    //       borderRadius: "5px",

    //     },
    //   },
    // },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          multiline: {
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
            letterSpacing: "1.5px",
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          zIndex: 9999,
          color: "white",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor: "black",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "black",
          backgroundColor: "#87cefa",
          textTransform: "none",
          fontWeight: 600,
          width: "fit-content",
          minWidth: "fit-content",
          height: "fit-content",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          letterSpacing: "1.5px",

          "&:hover": {
            backgroundColor: "#aff6ff",
            color: "black",
          },
          "&:disabled": {
            backgroundColor: "#aff6ff",
            color: "grey",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#36454F",
          color: "whitesmoke",
          fontSize: "15px",
          fontWeight: "bold",
          borderRadius: "10px",
          padding: "10px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "15px",
        },
      },
    },
  },
});

export const ThemeProviderUI = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};
