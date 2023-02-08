import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

export default function ClippedDrawer(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem button>
              <ListItemIcon
                style={{ width: "20%", float: "left", marginTop: "5px" }}
              >
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                style={{ width: "70%", float: "left" }}
                primary="Dashboard"
              />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon
                style={{ width: "20%", float: "left", marginTop: "5px" }}
              >
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText
                style={{ width: "70%", float: "left" }}
                primary="Shipping Comps"
              />
            </ListItem>
            <Divider />
            <div
              style={{
                backgroundColor: "#1976D2",
                position: "fixed",
                bottom: 0,
                width: 240,
                padding: 10,
                height: 50,
              }}
            >
              <div className="focus:outline-none text-white focus:border-blacks pl-10 m-auto	">
                <LogoutIcon className="text-white" />
                <span className="text-white text-lg focus:outline-none text-white focus:border-blacks pl-2">
                  Logout
                </span>
              </div>
            </div>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
