import React, {useEffect} from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import {
  SearchIconWrapper,
  StyledInputBase,
  AppBar,
  DrawerHeader,
  Search,
} from "../StyleSheets/style";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { IoIosArrowDown } from 'react-icons/io';
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import SimpleBackdrop from "./Backdrop";

const drawerWidth = 340;



const ButtonGroups=()=>{
  return(
    <Stack direction="row" spacing={3}>
    <Button
      variant="outlined"
      sx={{
        fontSize: 14,
        fontWeight: "400",
        padding: "4px 26px",
        borderRadius: 20,
        color: "var(--button-blue)",
        textTransform: "none",
      }}
    >
      Pricing
    </Button>
    <Button
      variant="contained"
      sx={{
        fontSize: 14,
        fontWeight: "400",
        padding: "14px 36px",
        borderRadius: 20,
        backgroundColor: "var(--button-blue)",
        color: "white",
        textTransform: "none",
        "&:hover, &:focus": {
          backgroundColor: "var(--button-blue)",
        },
      }}
    >
      Sign In
    </Button>
  </Stack>
  )
}

const SearchBar=()=>{
 return(
  <Search>
  <SearchIconWrapper>
    <SearchIcon />
  </SearchIconWrapper>
  <StyledInputBase
    placeholder="Search…"
    sx={{ pt: 0.5 }}
    inputProps={{ "aria-label": "search" }}
  />
</Search>
 )
}

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  
  return (
    <Box>
      <CssBaseline />
    <SimpleBackdrop handleOpen={open} close={handleDrawerClose}/>
   
      <AppBar position="fixed" open={open} sx={{   boxShadow:"0 4px 28px hsla(0,0%,8%,.05);",}}>
        <Toolbar
          sx={{ background: "white", color: "black", height: 90, }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: {
                xs: "space-between",
                sm: "space-between",
                md: "center",
              },
              alignItems: "center",
           
          
              width: "100%",
              columnGap: 15,
            }}
          >
          {/* Logo */}
            <img
              src="https://desklib.com/logo.png"
              className="img-fluid"
              style={{ width: "125px", height: "24px" }}
              alt=""
            />

            {/* center content start */}
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                alignItems: "center",
              
              
              }}
            >
              <Stack direction="row" spacing={3}>
              <SearchBar/>
              </Stack>

              <Stack direction="row"  >
                <Typography variant="paragraph"  sx={{ mr: 5 , }}>
                  Study
                </Typography>
                <Typography variant="paragraph" sx={{ mr: 5 }}>
                  Writing
                </Typography>
                <Typography variant="paragraph" sx={{ mr: 5 }}>
                  HomeWork Help
                </Typography>
                <Typography variant="paragraph" sx={{ mr: 5 }}>
                  Blog
                </Typography>
              </Stack>

           <ButtonGroups/>
            </Box>
            {/* center content end */}

            {/* Drawer icon */}
            <Box sx={{ display: { md: "none", lg: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <img
              src="https://desklib.com/logo.png"
              className="img-fluid"
            width={90}
              alt=""
            />
        </DrawerHeader>
        <Divider />
        
      
        <List sx={{p:2}}>
        <SearchBar/>
          {["Study", "Writing","HomeWork", "Help"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton >
                <Typography variant="paragraph">{text} </Typography>
              </ListItemButton>
                <IoIosArrowDown/>
            </ListItem>
          ))}
        </List>
         <Stack sx={{mx:"auto"}}>
         <ButtonGroups/>
         </Stack>
      </Drawer>
    </Box>
  );
}


