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
import ChildDataRightTable from "./childDataRightTable";

export default function ChildDataRight() {
  return (
    <div
      style={{
        padding: "10px 30px",
        width: "100%",
        floatL: "left",
      }}
    >
      <div
        style={{
          width: "100%",
          background: "green",
        }}
      >
        <div
          style={{
            background: "#00388B",
            fontWeight: "bold",
            color: "#fff",
            width: "12%",
            float: "left",
            textAlign: "center",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Price List
        </div>
        <div
          style={{
            fontWeight: "bold",
            background: "#ddd",
            color: "#000",
            width: "88%",
            float: "left",
            textAlign: "left",
            padding: "5px 20px",
          }}
        >
          PO History{" "}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margin: "20px 0",
          float: "right",
          textAlign: "right",
        }}
      >
        <Button
          variant="contained"
          size="small"
          style={{
            background: "#00388B",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          + Tambah
        </Button>
      </div>
      <ChildDataRightTable />
    </div>
  );
}
