import MuiAppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    typography: {
      h4: {
        fontFamily: "var(--font-inter)",
        color: "white",
        fontWeight: 700,
        fontSize: "28.5px",
      },
      paragraph: {
        color: "var(--font-color)",
        fontFamily: "var(--font-inter)",
        fontSize: "14 px",
      },
      text: {
        color: "var(--font-color)",
        fontWeight: 500,
        fontFamily: "var(--font-inter)",
        fontSize: "15px",
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 700,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
    },
  
   
  });

const drawerWidth = 240;
export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: "#f5f5f5",
  "&:hover": {
    backgroundColor: "#ebe7e6",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  height:"50px",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const styleButton = {
  fontWeight:400,
  fontSize:14,

}
