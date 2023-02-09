// import * as React from "react";
import React, { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";
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
  Modal,
  Box,
  Typography,
  Card,
  TextField,
  Input,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import InputBase from "@mui/material/InputBase";
import dataDummySupplier from "../../data/dummySupplier";
import ModalSupplier from "./modalSupplier";

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

export default function ChildDataRightTable(props) {
  const {
    itemData,
    openRow,
    handleOpenModal,
    openModal,
    setOpenModal,
    itemSupplier,
    selectSupplier,
    setSelectSupplier,
  } = props;
  // const [form] = Input.useForm();
  const handleCloseModal = () => setOpenModal(false);

  console.log("itemSupplier /////////", itemSupplier);
  console.log("selectSupplier /////////", selectSupplier);

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
              <StyledTableCell>Vendor</StyledTableCell>
              <StyledTableCell>Vendor Name</StyledTableCell>
              <StyledTableCell>Local/Foreign</StyledTableCell>
              <StyledTableCell>Currency</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Qty. Pricing</StyledTableCell>
              <StyledTableCell>Min. Order</StyledTableCell>
              <StyledTableCell>Decription</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          {openRow && (
            <TableBody>
              {/* {itemData &&
              itemData.map((row) => ( */}
              <StyledTableRow key={itemData.productId}>
                <StyledTableCell
                  style={{ background: "#ddd", padding: 0, height: 10 }}
                  component="th"
                  scope="row"
                >
                  <div
                    style={{
                      width: "60px",
                      float: "left",
                      padding: "10px 3px",
                    }}
                  >
                    {itemSupplier.supplierCode}
                  </div>

                  <IconButton
                    onClick={handleOpenModal}
                    style={{ float: "right" }}
                    sx={{
                      padding: 2,
                      width: 10,
                      height: 10,
                      margin: 0,
                      borderRadius: 1,
                      border: "1px solid",
                      background: "#fff",
                      borderColor: "primary.main",
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    background: "#ddd",
                    padding: "0 0 0 5px",
                    height: 10,
                  }}
                >
                  {itemSupplier.supplierName}
                </StyledTableCell>
                <StyledTableCell>
                  {/* {itemData.data.foreign} */}
                </StyledTableCell>
                <StyledTableCell>
                  {/* {itemData.data.currency} */}
                </StyledTableCell>
                <StyledTableCell>{/* {itemData.data.price} */}</StyledTableCell>
                <StyledTableCell
                  style={{ background: "#ddd", padding: 0, height: 10 }}
                >
                  {" "}
                  <IconButton
                    style={{ float: "right" }}
                    sx={{
                      padding: 2,
                      width: 20,
                      height: 20,
                      borderRadius: 1,
                      border: "1px solid",
                      borderColor: "primary.main",
                    }}
                  >
                    <CalendarTodayIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    background: "#ddd",
                    padding: 0,
                    height: 10,
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  <IconButton
                    sx={{
                      padding: 2,
                      width: 20,
                      height: 20,
                      borderRadius: 1,
                      border: "1px solid",
                      borderColor: "primary.main",
                    }}
                  >
                    <CheckIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                </StyledTableCell>{" "}
                <StyledTableCell>
                  {/* {itemData.data.min_order} */}
                </StyledTableCell>
                <StyledTableCell>
                  {/* {itemData.data.decription} */}
                </StyledTableCell>
                <StyledTableCell
                  style={{
                    background: "#ddd",
                    padding: 0,
                    height: 10,
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  <IconButton
                    sx={{
                      padding: 2,
                      width: 20,
                      height: 20,
                      borderRadius: 1,
                      border: "1px solid",
                      borderColor: "primary.main",
                      color: "red",
                    }}
                  >
                    <DeleteIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
              {/* ))} */}
            </TableBody>
          )}
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
        itemSupplier={selectSupplier.itemSupplier}
        setSelectSupplier={setSelectSupplier}
      />
    </>
  );
}
