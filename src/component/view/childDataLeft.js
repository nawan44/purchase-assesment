import {
  Box,
  Select,
  FormControl,
  InputLabel,
  Button,
  MenuItem,
} from "@mui/material";
import * as React from "react";
import ChildDataLeftTable from "./childDataLeftTable";
import dataDummy from "../../data/dummy";

export default function ChildDataLeft(props) {
  const { lihatData, setLihatData, selectData, setSelectData, itemData } =
    props;
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div
      style={{
        padding: "10px 50px 10px 0",
        // width: "30%",
        height: "100%",
        // background: "red",
        float: "left",
      }}
    >
      <h5
        style={{
          color: "#00388B",
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
            textTransform: "none",
          }}
        >
          Apply
        </Button>
      </div>
      <ChildDataLeftTable
        dataDummy={dataDummy}
        selectData={selectData}
        setSelectData={setSelectData}
        lihatData={lihatData}
        setLihatData={setLihatData}
        itemData={itemData}
      />
    </div>
  );
}
