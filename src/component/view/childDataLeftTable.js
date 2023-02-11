import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Button,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

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

function createData(productId, productName) {
  return { productId, productName };
}

const rows = [
  createData("1.L11", "Dummy Product 1"),
  createData("1.L12", "Dummy Product 2"),
  createData("1.L13", "Dummy Product 3"),
  createData("1.L14", "Dummy Product 4"),
  createData("1.L15", "Dummy Product 5"),
];
export default function ChildDataLeftTable(props) {
  const {
    dataDummy,
    selectData,
    setSelectData,
    lihatData,
    setLihatData,
    itemData,
  } = props;
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  return (
    <TableContainer component={Paper}>
      <Table
        style={{ width: "100%" }}
        size="small"
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Product ID</StyledTableCell>
            <StyledTableCell align="left">Product Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* rows.map */}
          {dataDummy?.map((itemData) => (
            <StyledTableRow key={itemData.productId}>
              <StyledTableCell component="th" scope="row">
                <Button
                  key={itemData.id}
                  onClick={() => {
                    setSelectData({
                      aksiData: "lihatData",
                      itemData,
                    });
                    setLihatData(true);
                  }}
                  variant="contained"
                  style={{ background: "none", textTransform: "none" }}
                  size="small"
                >
                  <h5 style={{ color: "#000" }}>{itemData.productId}</h5>
                </Button>
              </StyledTableCell>
              <StyledTableCell align="left">
                {itemData.productName}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
