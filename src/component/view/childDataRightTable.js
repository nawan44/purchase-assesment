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
  IconButton,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
// import { red } from "@mui/material/colors";
// import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

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
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ChildDataRightTable(props) {
  const { itemData, openRow, handleOpenModal, openModal, setOpenModal } = props;
  const handleCloseModal = () => setOpenModal(false);

  console.log("itemData /////////", itemData);

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
                  style={{ padding: 0 }}
                  component="th"
                  scope="row"
                >
                  {/* <Button
                  variant="contained"
                  style={{
                    padding: "10px 0",
                    background: "none",
                    textTransform: "none",
                    width: "30px",
                  }}
                  size="small"
                  endIcon={<SearchIcon color="primary" />}
                ></Button> */}

                  <IconButton
                    onClick={handleOpenModal}
                    style={{ float: "right" }}
                    sx={{
                      padding: 2,
                      width: 10,
                      height: 10,
                      borderRadius: 1,
                      border: "1px solid",
                      borderColor: "primary.main",
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell>
                  {/* {itemData.productName} */}
                </StyledTableCell>
                <StyledTableCell>
                  {/* {itemData.data.foreign} */}
                </StyledTableCell>
                <StyledTableCell>
                  {/* {itemData.data.currency} */}
                </StyledTableCell>
                <StyledTableCell>{/* {itemData.data.price} */}</StyledTableCell>
                <StyledTableCell style={{ padding: 0 }}>
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
                <StyledTableCell style={{ margin: 0, textAlign: "center" }}>
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
                <StyledTableCell style={{ margin: 0, textAlign: "center" }}>
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
      <Modal
        keepMounted
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ width: "100%", height: "30px", background: "#073E8B" }}>
            <div style={{ width: "90%", float: "left" }}>Search</div>
            <div style={{ width: "10%", float: "left" }}>
              <CloseIcon />
            </div>
          </div>
          <div style={{ width: "100%", height: "50px", background: "green" }}>
            <div style={{ padding: "10px 0", width: "30%", float: "left" }}>
              Supplier Name
            </div>
            <div style={{ width: "70%", float: "left" }}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  // sx={{ p: "10px" }}
                  sx={{
                    padding: 2,
                    width: 10,
                    height: 10,
                    borderRadius: 1,
                    border: "1px solid",
                    background: "#073E8B",
                    borderColor: "primary.main",
                  }}
                  aria-label="search"
                >
                  <SearchIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Paper>
            </div>
          </div>
        </Box>

        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
      </Modal>
      {/* </div> */}

      {/* <ModalSupplier
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        setOpenModal={setOpenModal}
      /> */}
    </>
  );
}
