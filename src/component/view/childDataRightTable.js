import * as React from "react";
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
} from "@mui/material";

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

function createData(
  vendor,
  vendorName,
  foreign,
  currency,
  price,
  date,
  qty_pricing,
  min_order,
  decription,
  action
) {
  return {
    vendor,
    vendorName,
    foreign,
    currency,
    price,
    date,
    qty_pricing,
    min_order,
    decription,
    action,
  };
}

const rows = [
  createData("1.L11", "Dummy Product 1"),
  createData("1.L12", "Dummy Product 2"),
  createData("1.L13", "Dummy Product 3"),
  createData("1.L14", "Dummy Product 4"),
  createData("1.L15", "Dummy Product 5"),
];
export default function ChildDataRightTable() {
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
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
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.productId}>
                <StyledTableCell component="th" scope="row">
                  <Button
                    variant="contained"
                    style={{ background: "none", textTransform: "none" }}
                    size="small"
                  >
                    <h5 style={{ color: "#000" }}>{row.productId}</h5>
                  </Button>
                </StyledTableCell>
                <StyledTableCell>{row.foreign}</StyledTableCell>
                <StyledTableCell>{row.currency}</StyledTableCell>
                <StyledTableCell>{row.price}</StyledTableCell>
                <StyledTableCell>{row.date}</StyledTableCell>
                <StyledTableCell>{row.qty_pricing}</StyledTableCell>
                <StyledTableCell>{row.min_order}</StyledTableCell>
                <StyledTableCell>{row.decription}</StyledTableCell>
                <StyledTableCell>{row.action}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
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
    </>
  );
}
