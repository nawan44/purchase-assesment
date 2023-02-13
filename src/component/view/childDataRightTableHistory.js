// import * as React from "react";
import React, { useState, useEffect } from "react";
import "../../assets/style/style.css";
import { styled } from "@mui/material/styles";
import dummy from "../../data/dummy";
import dummySupplier from "../../data/dummySupplier";

import {
  Button,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  tableCellClasses,
  IconButton,
  TextField,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import InputBase from "@mui/material/InputBase";
// import datarowSupplier from "../../data/rowSupplier";
import ModalSupplier from "./modalSupplier";
import { CheckBox } from "@mui/icons-material";
import moment from "moment";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import dummyPoHistory from "../../data/dummyPoHistory";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import TimePicker from "@mui/lab/TimePicker";
// import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import MobileDatePicker from "@mui/lab/MobileDatePicker";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00388B",
    color: theme.palette.common.white,
    fontWeight: "bold",
    borderLeft: "1px solid rgba(224, 224, 224, 1)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(
//   vendor,
//   vendorName,
//   foreign,
//   currency,
//   price,
//   date,
//   qty_pricing,
//   min_order,
//   decription,
//   action
// ) {
//   return {
//     vendor,
//     vendorName,
//     foreign,
//     currency,
//     price,
//     date,
//     qty_pricing,
//     min_order,
//     decription,
//     action,
//   };
// }

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// const StyledTableRow = styled(TableRow)(({ theme }) => ({

// const useStyles = makeStyles({
//   underline: {
//     "&&&:before": {
//       borderBottom: "none",
//     },
//     "&&:after": {
//       borderBottom: "none",
//     },
//   },
// });

export default function ChildDataRightTable(props) {
  // const classes = useStyles();

  const {
    dummy,
    openRow,
    handleOpenModal,
    openModal,
    setOpenModal,
    row,
    selectSupplier,
    setSelectSupplier,
  } = props;
  // const [form] = Input.useForm();
  const handleCloseModal = () => setOpenModal(false);
  const [checked, setChecked] = React.useState(true);
  const [tanggal, setTanggal] = React.useState("");
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          style={{ width: "100%" }}
          size="small"
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell
                sx={{ textAlign: "center", width: 85, padding: 1 }}
                style={{ fontSize: 15 }}
              >
                PO No.
              </StyledTableCell>
              <StyledTableCell
                sx={{ textAlign: "center", width: 70, padding: 1 }}
                style={{ fontSize: 15 }}
              >
                PO Date
              </StyledTableCell>
              <StyledTableCell
                sx={{ textAlign: "center", width: 100, padding: 1 }}
                style={{ fontSize: 15 }}
              >
                Vendor
              </StyledTableCell>
              <StyledTableCell
                sx={{ textAlign: "center", width: 50, padding: 1 }}
                style={{ fontSize: 15 }}
              >
                PO Qty
              </StyledTableCell>
              <StyledTableCell
                sx={{ textAlign: "center", width: 50, padding: 1 }}
                style={{ fontSize: 15 }}
              >
                PO unit
              </StyledTableCell>
              <StyledTableCell
                sx={{ textAlign: "center", width: 20, padding: 0 }}
                style={{ fontSize: 15 }}
              >
                Currency
              </StyledTableCell>
              <StyledTableCell
                sx={{ textAlign: "center", width: 80, padding: 1 }}
                style={{ fontSize: 15 }}
              >
                Unit Price
              </StyledTableCell>
              <StyledTableCell
                sx={{ textAlign: "center", width: 50, padding: 1 }}
                style={{ fontSize: 15 }}
              >
                Disc.
              </StyledTableCell>
              <StyledTableCell
                sx={{ textAlign: "center", width: 50, padding: 1 }}
                style={{ fontSize: 15 }}
              >
                VAT
              </StyledTableCell>
              <StyledTableCell
                sx={{ textAlign: "center", width: 50, padding: 1 }}
                style={{ fontSize: 15 }}
              >
                Inv. Qty
              </StyledTableCell>
              <StyledTableCell
                sx={{ textAlign: "center", width: 50, padding: 1 }}
                style={{ fontSize: 15 }}
              >
                Inv. Unit
              </StyledTableCell>
            </TableRow>
          </TableHead>
          {/* {openRow && ( */}
          <TableBody>
            {dummyPoHistory &&
              dummyPoHistory.map((row) => (
                <StyledTableRow key={dummyPoHistory.productId}>
                  <StyledTableCell
                    sx={{
                      background: "#fff",
                      padding: "5px 0 5px 10px",
                      textAlign: "left",
                    }}
                    style={{ fontSize: 14 }}
                    component="th"
                    scope="row"
                  >
                    {row.poNo}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      background: "#fff",
                      padding: "0 0 0 15px",
                      height: 10,
                      width: 30,
                      padding: 0,
                      textAlign: "center",
                    }}
                    style={{ fontSize: 14 }}
                    component="th"
                  >
                    {row.poDate}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      background: "#fff",
                      padding: "0 0 0 10px",
                      textAlign: "left",
                    }}
                    style={{ fontSize: 14 }}
                    component="th"
                  >
                    {row.vendor}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      background: "#fff",
                      padding: "0 10px 0 0",
                      textAlign: "right",
                    }}
                    style={{ fontSize: 14 }}
                    component="th"
                  >
                    {row.poQty}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      background: "#fff",
                      padding: "0 0 0 10px",
                      textAlign: "left",
                    }}
                    style={{ fontSize: 14 }}
                    component="th"
                  >
                    {row.poUnit}{" "}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      background: "#fff",
                      padding: "0 0 0 10px",
                      textAlign: "left",
                    }}
                    style={{ fontSize: 14 }}
                    component="th"
                  >
                    {row.currency}{" "}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      background: "#fff",
                      padding: "0 10px 0 0",
                      textAlign: "right",
                    }}
                    style={{ fontSize: 14 }}
                    component="th"
                  >
                    {row.unitPrice}{" "}
                  </StyledTableCell>{" "}
                  <StyledTableCell
                    sx={{
                      background: "#fff",
                      padding: "0 10px 0 0",
                      textAlign: "right",
                    }}
                    style={{ fontSize: 14 }}
                    component="th"
                  >
                    {row.disc}{" "}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      background: "#fff",
                      padding: 0,
                      textAlign: "center",
                    }}
                    style={{ fontSize: 14 }}
                    component="th"
                  >
                    {row.vat}{" "}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      background: "#fff",
                      padding: "0 10px 0 0",
                      textAlign: "right",
                    }}
                    style={{ fontSize: 14 }}
                    component="th"
                  >
                    {row.invQty}{" "}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      background: "#fff",
                      padding: "0 0 0 10px",
                      textAlign: "left",
                    }}
                    style={{ fontSize: 14 }}
                    component="th"
                  >
                    {row.invUnit}{" "}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
          {/* // )} */}
        </Table>
      </TableContainer>
      <Button
        size="small"
        variant="contained"
        // style={{ float: "right", margin: "20px 0", color: "#OB773B" }}

        style={{
          background: "#0B773B",
          float: "right",
          margin: "20px 0 ",
          fontWeight: "bold",
          textTransform: "none",
        }}
      >
        Save
      </Button>
      {/* <div sx={style}> */}

      {/* </div> */}

      <ModalSupplier
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectSupplier={selectSupplier}
        row={selectSupplier.row}
        setSelectSupplier={setSelectSupplier}
      />
    </>
  );
}
