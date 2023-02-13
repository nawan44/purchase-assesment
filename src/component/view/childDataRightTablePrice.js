import React, { useEffect } from "react";
import "../../assets/style/style.css";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import currency from "../../data/currency";
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
  FormControlLabel,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ChildDataRightTablePrice(props) {
  const {
    itemData,
    openRow,
    setOpenRow,
    handleOpenModal,
    openModal,
    setOpenModal,
    itemSupplier,
    selectSupplier,
    setSelectSupplier,
  } = props;
  const handleCloseModal = () => setOpenModal(false);
  const [checked, setChecked] = React.useState(true);
  const [save, setSave] = React.useState(false);
  const [mataUang, setMataUang] = React.useState({
    currency: currency[0],
  });
  const [tanggal, setTanggal] = React.useState(null);
  // const [value, setValue] = React.useState(null);
  const [priceList, setPriceList] = React.useState({
    vendor: itemSupplier?.supplierCode,
    vendorName: itemSupplier?.supplierName,
    localForeign: "",
    currency: "",
    price: "",
    date: "",
    qtyPricing: "",
    minOrder: "",
    description: "",
  });

  useEffect(() => {
    setPriceList({
      ...priceList,
      vendor: itemSupplier.supplierCode,
      vendorName: itemSupplier.supplierName,
      qtyPricing: checked,
      date: tanggal,
      currency: mataUang.currency.code,
    });
  }, [
    tanggal,
    itemSupplier?.supplierCode,
    itemSupplier?.supplierName,
    checked,
    mataUang,
  ]);
  const handleChangeSelect = (name) => (event) => {
    setMataUang({ ...mataUang, [name]: event.target.value });
  };
  const handleChange = (event) => {
    event.preventDefault();
    setPriceList({
      ...priceList,
      [event.target.name]: event.target.value,
    });

    setChecked(event.target.checked);
  };
  const remove = (event) => {
    setOpenRow(false);
    setSave(true);
    setSelectSupplier({ ...selectSupplier, itemSupplier: "" });
    setMataUang({ ...mataUang, currency: "" });
    setPriceList({
      ...priceList,
      vendor: "",
      vendorName: "",
      localForeign: "",
      currency: "",
      price: "",
      date: "",
      qtyPricing: false,
      minOrder: "",
      description: "",
    });
    setTanggal(null);
    setChecked(false);
  };
  const submit = (event) => {
    setSave(true);
    setSelectSupplier({ ...selectSupplier, itemSupplier: "" });
    setMataUang({ ...mataUang, currency: "" });
    setPriceList({
      ...priceList,
      vendor: "",
      vendorName: "",
      localForeign: "",
      currency: "",
      price: "",
      date: "",
      qtyPricing: false,
      minOrder: "",
      description: "",
    });
    setChecked(false);
    setTanggal(null);
  };
  console.log("priceList", priceList);

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
                sx={{
                  padding: 1,
                  textAlign: "center",
                  fontSize: "14px",
                  width: 80,
                }}
              >
                Vendor
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  padding: 1,
                  textAlign: "center",
                  fontSize: "14px",
                  width: 100,
                }}
              >
                Vendor Name
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  padding: 1,
                  textAlign: "center",
                  fontSize: "14px",
                  width: 120,
                }}
              >
                Local / Foreign
              </StyledTableCell>
              <StyledTableCell
                sx={{ padding: 1, textAlign: "center", fontSize: "14px" }}
              >
                Currency
              </StyledTableCell>
              <StyledTableCell
                sx={{ padding: 1, textAlign: "center", fontSize: "14px" }}
              >
                Price
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  padding: 1,
                  textAlign: "center",
                  fontSize: "14px",
                  width: 120,
                }}
              >
                Date
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  padding: 1,
                  textAlign: "center",
                  fontSize: "14px",
                  width: 20,
                }}
              >
                Qty. Pricing
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  padding: 1,
                  textAlign: "center",
                  fontSize: "14px",
                  width: 80,
                }}
              >
                Min. Order
              </StyledTableCell>
              <StyledTableCell
                sx={{ padding: 1, textAlign: "center", fontSize: "14px" }}
              >
                Decription
              </StyledTableCell>
              <StyledTableCell
                sx={{ padding: 1, textAlign: "center", fontSize: "14px" }}
              ></StyledTableCell>
            </TableRow>
          </TableHead>
          {openRow && (
            <TableBody>
              <StyledTableRow key={itemData.productId}>
                <StyledTableCell
                  sx={{
                    background: itemSupplier.supplierCode ? "#ddd" : "#fff",
                    padding: 0,
                    height: 10,
                    width: 30,
                  }}
                  component="th"
                  scope="row"
                >
                  <div
                    style={{
                      width: "50%",
                      float: "left",
                      padding: "10px 5px",
                    }}
                  >
                    {save == true ? "" : itemSupplier.supplierCode}
                  </div>
                  <IconButton
                    onClick={handleOpenModal}
                    style={{ float: "right" }}
                    sx={{
                      width: "30%",
                      float: "left",
                      padding: 2,
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
                  sx={{
                    background: itemSupplier.supplierName ? "#ddd" : "#fff",
                    padding: "0px 5px",
                    height: 10,
                    width: 30,
                  }}
                  component="th"
                >
                  {save == true ? "" : itemSupplier.supplierName}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    background: priceList.localForeign ? "#ddd" : "#fff",
                    padding: 0,
                    height: 10,
                    width: 30,
                  }}
                  component="th"
                >
                  <Select
                    name="localForeign"
                    disabled={itemSupplier !== "" ? false : true}
                    value={priceList.localForeign}
                    variant="outlined"
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                      width: "100%",
                      padding: 0,
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleChange}
                  >
                    <MenuItem value="Local">Local</MenuItem>
                    <MenuItem value="Foreign">Foreign</MenuItem>
                  </Select>{" "}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    background: priceList.currency ? "#ddd" : "#fff",
                    padding: 0,
                    height: 10,
                    width: 30,
                  }}
                  component="th"
                >
                  <TextField
                    disabled={itemSupplier !== "" ? false : true}
                    id="standard-select-currency"
                    select
                    size="small"
                    sx={{
                      "& fieldset": {
                        border: "none",
                      },
                      width: "100%",
                      padding: 0,
                    }}
                    value={mataUang.currency}
                    onChange={handleChangeSelect("currency")}
                    SelectProps={{
                      renderValue: (option) => option.code,
                    }}
                  >
                    {currency.map((row) => (
                      <MenuItem key={row.code} value={row}>
                        {row.code} - {row.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    background: priceList.price ? "#ddd" : "#fff",
                    padding: 0,
                    height: 10,
                    width: 30,
                  }}
                  component="th"
                >
                  <TextField
                    disabled={itemSupplier !== "" ? false : true}
                    variant="outlined"
                    type="number"
                    name="price"
                    value={priceList.price}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                    InputProps={{ disableUnderline: true }}
                  />
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    background: tanggal ? "#ddd" : "#fff",
                    padding: 0,
                    height: 10,
                    width: 10,
                    textAlign: "center",
                  }}
                  component="th"
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      disabled={itemSupplier !== "" ? false : true}
                      label=" "
                      value={tanggal}
                      onChange={(newValue) => {
                        setTanggal(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          sx={{
                            "& fieldset": { border: "none" },
                            fontSize: 20,
                            textAlign: "right",
                          }}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    background: checked ? "#ddd" : "#fff",
                    margin: 0,
                    textAlign: "center",
                  }}
                  component="th"
                >
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Checkbox
                          disabled={itemSupplier !== "" ? false : true}
                          checked={checked}
                          onChange={handleChange}
                        />
                      }
                    />
                  </FormControl>
                </StyledTableCell>{" "}
                <StyledTableCell
                  sx={{
                    background: priceList.minOrder ? "#ddd" : "#fff",
                    padding: 0,
                    height: 10,
                    width: 30,
                    textAlign: "center",
                  }}
                  component="th"
                >
                  <TextField
                    disabled={itemSupplier !== "" ? false : true}
                    variant="outlined"
                    type="number"
                    name="minOrder"
                    value={priceList.minOrder}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                    InputProps={{ disableUnderline: true }}
                  />
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    background: priceList.description ? "#ddd" : "#fff",
                    padding: 0,
                    height: 10,
                    width: 30,
                    margin: 0,
                    textAlign: "center",
                  }}
                  component="th"
                >
                  <TextField
                    disabled={itemSupplier !== "" ? false : true}
                    variant="outlined"
                    name="description"
                    value={priceList.description}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                    InputProps={{ disableUnderline: true }}
                  />
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    // background: itemSupplier.supplierCode ? "#ddd" : "#fff",
                    padding: 0,
                    height: 10,
                    width: 30,
                    textAlign: "center",
                  }}
                  component="th"
                >
                  {" "}
                  <IconButton
                    disabled={itemSupplier !== "" ? false : true}
                    sx={{
                      padding: 2,
                      width: 20,
                      height: 20,
                      borderRadius: 1,
                      border: "1px solid",
                      borderColor: "primary.main",
                      color: "red",
                    }}
                    onClick={remove}
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
        onClick={submit}
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

      <ModalSupplier
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectSupplier={selectSupplier}
        itemSupplier={selectSupplier.itemSupplier}
        setSelectSupplier={setSelectSupplier}
        setSave={setSave}
      />
    </>
  );
}
