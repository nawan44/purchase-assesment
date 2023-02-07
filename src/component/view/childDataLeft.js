import Box from "@mui/material/Box";
import {
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  TabPanel,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
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
import ChildDataLeftTable from "./childDataLeftTable";

export default function ChildDataLeft() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div
      style={{
        padding: "10px 50px 10px 0",
        width: "30%",
        height: "100%",
        // background: "red",
        float: "left",
      }}
    >
      <h5
        style={{
          color: "#fff",
          fontWeight: "bold",
          textAlign: "left",
          margin: "0 0 30px 0",
        }}
      >
        Filter
      </h5>
      <div
        style={{
          margin: "5px 0",
          width: "100%",
          float: "left",
        }}
      >
        <div
          style={{
            textAlign: "left",
            width: "35%",
            float: "left",
            padding: "10px 0",
          }}
        >
          Prod. Type
        </div>
        <div style={{ width: "65%", float: "left" }}>
          <Box sx={{ minWidth: 80 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">- Select -</InputLabel>
              <Select
                style={{ height: "40px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      <div
        style={{
          margin: "5px 0",
          width: "100%",
          float: "left",
        }}
      >
        <div
          style={{
            textAlign: "left",
            width: "35%",
            float: "left",
            padding: "10px 0",
          }}
        >
          Prod. Category
        </div>
        <div style={{ width: "65%", float: "left" }}>
          <Box sx={{ minWidth: 80 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">- Select -</InputLabel>
              <Select
                style={{ height: "40px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>

      <div
        style={{
          margin: "5px 0",
          width: "100%",
          float: "left",
        }}
      >
        <div
          style={{
            textAlign: "left",
            width: "35%",
            float: "left",
            padding: "10px 0",
          }}
        >
          Prod. ID / Name
        </div>
        <div style={{ width: "65%", float: "left" }}>
          <Box sx={{ minWidth: 80 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">- Select -</InputLabel>
              <Select
                style={{ height: "40px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div
        style={{
          margin: "5px 0 40px 0",
          width: "100%",
          float: "left",
        }}
      >
        {" "}
        <Button
          variant="contained"
          style={{
            background: "#00388B",
            float: "right",
            margin: "20px 0 40px 0s",
          }}
        >
          Apply
        </Button>
      </div>
      <ChildDataLeftTable />
    </div>
  );
}
