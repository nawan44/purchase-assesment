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
  Input,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import dummySupplier from "../../data/dummySupplier";

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

export default function ModalSupplier(props) {
  const {
    openModal,
    handleCloseModal,
    handleOpenModal,
    setSelectSupplier,
    setOpenModal,
    setSave,
  } = props;
  const [filter, setFilter] = React.useState("");
  const lowercasedFilter = filter.toString();
  // const lowercasedDummy = dummySupplier.map((x) =>
  //   Object.fromEntries(
  //     Object.entries(x).map(([key, value]) => [
  //       key,
  //       typeof value == "string" ? value.toLowerCase() : value,
  //     ])
  //   )
  // );

  const filteredData = dummySupplier?.filter((item) => {
    try {
      return Object.keys(item).some((key) => {
        if (item[key]) {
          return item[key].includes(lowercasedFilter);
        }
      });
    } catch (e) {
      console.log("data tidak ada");
    }
  });
  const handleChangeData = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <Modal
        open={openModal}
        close={handleCloseModal}
        aria-labelledby="simple-modal-title"
      >
        <div className="modal-size">
          <div style={{ width: "100%", height: "45px", background: "#073E8B" }}>
            <div
              style={{
                width: "90%",
                float: "left",
                padding: "10px 60px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Search
            </div>
            <div
              onClick={handleCloseModal}
              style={{ width: "10%", float: "right", padding: " 0" }}
            >
              <IconButton>
                <CloseIcon style={{ color: "#fff", fontWeight: "bold" }} />
              </IconButton>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "80px",
              background: "#fff",
              padding: "15px 60px",
            }}
          >
            <div
              style={{
                padding: "10px 0",
                width: "30%",
                float: "left",
                fontWeight: "bold",
              }}
            >
              Supplier Name
            </div>
            <div style={{ width: "70%", float: "left" }}>
              <Input
                sx={{
                  width: 560,
                  border: "1px solid #ddd",
                }}
                id="standard-adornment-password"
                value={filter}
                onChange={handleChangeData}
                onSearch={handleChangeData}
                endAdornment={
                  <InputAdornment position="end">
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
                  </InputAdornment>
                }
              />{" "}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#fff",
              padding: "5px 50px",
            }}
          >
            <TableContainer component={Paper}>
              <Table
                style={{ width: "100%" }}
                size="small"
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Supplier Code</StyledTableCell>
                    <StyledTableCell>Supplier Name</StyledTableCell>
                    <StyledTableCell>Local/Foreign</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData.map((itemSupplier) => (
                    <StyledTableRow
                      onClick={() => {
                        setSelectSupplier({
                          itemSupplier,
                        });
                        setOpenModal(false);
                        setSave(false);
                      }}
                      key={itemSupplier.supplierCode}
                    >
                      <StyledTableCell
                        style={{ padding: "2px 0", textAlign: "center" }}
                        component="th"
                        scope="row"
                      >
                        <Button
                          onClick={handleOpenModal}
                          style={{ textAlign: "center" }}
                          size="small"
                          sx={{
                            padding: 0,
                            borderRadius: 1,
                            border: "1px solid",
                            borderColor: "primary.main",
                          }}
                        >
                          {itemSupplier.supplierCode}
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell style={{ padding: "0 5px" }}>
                        {" "}
                        {itemSupplier.supplierName}
                      </StyledTableCell>
                      <StyledTableCell style={{ padding: "0 5px" }}>
                        {" "}
                        {itemSupplier.localForeign}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              variant="contained"
              onClick={handleCloseModal}
              style={{
                background: "#00388B",
                float: "right",
                margin: "40px 0 40px 0",
                textTransform: "none",
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
