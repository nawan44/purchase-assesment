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
import ChildDataLeft from "./childDataLeft";
import ChildDataRight from "./childDataRight";

export default function ChildData() {
  return (
    <div
      style={{
        padding: "10px 30px",
        // background: "red",
        height: "700px",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      }}
    >
      <div
        style={{
          width: "30%",
          heeight: "100%",
          float: "left",
        }}
      >
        {" "}
        <ChildDataLeft />
      </div>
      <div
        style={{
          width: "70%",
          float: "left",
        }}
      >
        {" "}
        <ChildDataRight />
      </div>
    </div>
  );
}
