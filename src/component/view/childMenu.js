import Box from "@mui/material/Box";
import { Tab, Tabs, Toolbar, Tooltip, TabPanel } from "@mui/material";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChildData from "./childData";

export default function ChildMenu() {
  return (
    <div
      style={{
        padding: "10px 30px",
        borderRadius: "7px  7px 0px 0px ",
        background: "#00388B",
        height: "50px",
      }}
    >
      <h5 style={{ color: "#fff", fontWeight: "bold", textAlign: "left" }}>
        Price List
      </h5>
    </div>
  );
}
