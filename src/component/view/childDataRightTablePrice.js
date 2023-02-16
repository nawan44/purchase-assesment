import React, { useEffect } from "react";
import "../../assets/style/style.css";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import currency from "../../data/currency";
import {
  Button,
  Stack,
  Snackbar,
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
import MuiAlert from "@mui/material/Alert";

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
    errorVendor,
    setErrorVendor,
    errorVendorName,
    setErrorVendorName,
    errorLocalForeign,
    setErrorLocalForeign,
    errorCurrency,
    setErrorCurrency,
    errorPrice,
    setErrorPrice,
    errorDate,
    setErrorDate,
    errorQtyPricing,
    setErrorQtyPricing,
    errorMinOrder,
    setErrorMinOrder,
    errorDescription,
    setErrorDescription,
  } = props;
  const handleCloseModal = () => setOpenModal(false);
  const [checked, setChecked] = React.useState(true);
  const [save, setSave] = React.useState(false);
  const [mataUang, setMataUang] = React.useState({
    currency: currency[0],
  });
  const [tanggal, setTanggal] = React.useState(null);
  const [openSnackBerhasil, setOpenSnackBerhasil] = React.useState(false);
  const [openSnackGagal, setOpenSnackGagal] = React.useState(false);
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
  useEffect(
    () => {
      if (priceList.localForeign !== "") {
        setErrorLocalForeign();
      } else if (priceList.currency !== "") {
        setErrorCurrency();
      } else if (priceList.price !== "") {
        setErrorPrice();
      } else if (priceList.date !== "") {
        setErrorDate();
      } else if (priceList.qtyPricing !== "") {
        setErrorPrice();
      } else if (priceList.minOrder !== "") {
        setErrorDate();
      } else if (priceList.description !== "") {
        setErrorDescription();
      }
    },
    [priceList.localForeign],
    [priceList.currency],
    [priceList.price],
    [priceList.date],
    [priceList.qtyPricing],
    [priceList.minOrder],
    [priceList.description]
  );

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBerhasil(false);
    setOpenSnackGagal(false);
  };

  const handleChangeSelect = (name) => (event) => {
    setMataUang({ ...mataUang, [name]: event.target.value });
    setErrorCurrency(false);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setPriceList({
      ...priceList,
      [event.target.name]: event.target.value,
    });
    setChecked(event.target.checked);
    setErrorPrice(false);
    setErrorDate(false);
    // setTanggal(null);
    setErrorQtyPricing(false);
    setErrorMinOrder(false);
    setErrorDescription(false);
  };
  const valid = () => {
    if (priceList.vendor == "" || priceList.vendor == undefined) {
      setErrorVendor("❌ Vendor Tidak Boleh Kosong");
      setErrorVendorName("❌ Vendor Name Tidak Boleh Kosong");
    } else if (
      priceList.localForeign == "" ||
      priceList.localForeign == undefined
    ) {
      setErrorLocalForeign("❌ Local / Foreign Tidak Boleh Kosong");
    } else if (priceList.currency == "" || priceList.currency == undefined) {
      setErrorCurrency("❌ Currency Tidak Boleh Kosong");
    } else if (priceList.price == "" || priceList.price == undefined) {
      setErrorPrice("❌ Price Tidak Boleh Kosong");
    } else if (priceList.date == "" || priceList.date == undefined) {
      setErrorDate("❌ Date Tidak Boleh Kosong");
    }
    // else if (
    //   priceList.qtyPricing == "" ||
    //   priceList.qtyPricing == undefined
    // ) {
    //   setErrorQtyPricing("❌ Qty Price Tidak Boleh Kosong");
    // }
    else if (priceList.minOrder == "" || priceList.minOrder == undefined) {
      setErrorMinOrder("❌ Min Order Tidak Boleh Kosong");
    } else if (
      priceList.description == "" ||
      priceList.description == undefined
    ) {
      setErrorDescription("❌ Description Tidak Boleh Kosong");
    } else {
      return false;
    }
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
    setOpenSnackGagal(true);
  };
  const submit = async (values) => {
    const aa = valid();
    console.log("valid", aa);

    if (aa == false) {
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
      setOpenSnackBerhasil(true);
    } else {
      console.log("ERROR");
    }
  };
  console.log("errorCurrency", errorCurrency);

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
                  fontSize: "13px",
                  width: 80,
                }}
              >
                Vendor
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  padding: 1,
                  textAlign: "center",
                  fontSize: "13px",
                  width: 100,
                }}
              >
                Vendor Name
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  padding: 1,
                  textAlign: "center",
                  fontSize: "13px",
                  width: 90,
                }}
              >
                Local / Foreign
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  width: 70,
                  padding: 1,
                  textAlign: "center",
                  fontSize: "13px",
                }}
              >
                Currency
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  padding: 1,
                  textAlign: "center",
                  fontSize: "13px",
                  width: 80,
                }}
              >
                Price
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  padding: 1,
                  textAlign: "center",
                  fontSize: "13px",
                  width: 100,
                }}
              >
                Date
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  padding: 1,
                  textAlign: "center",
                  fontSize: "13px",
                  width: 70,
                }}
              >
                Qty. Pricing
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  padding: 1,
                  textAlign: "center",
                  fontSize: "13px",
                  width: 80,
                }}
              >
                Min. Order
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  width: 100,
                  padding: 1,
                  textAlign: "center",
                  fontSize: "13px",
                }}
              >
                Decription
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  width: 20,
                  padding: 1,
                  textAlign: "center",
                }}
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
                    border:
                      errorVendor === "❌ Vendor Tidak Boleh Kosong"
                        ? "1px solid red"
                        : "none",
                  }}
                  component="th"
                  scope="row"
                >
                  <div
                    style={{
                      width: "50%",
                      float: "left",
                      padding: "10px 5px",
                      fontSize: "13px",
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
                    border:
                      errorVendorName === "❌ Vendor Name Tidak Boleh Kosong"
                        ? "1px solid red"
                        : "none",
                  }}
                  component="th"
                  style={{ fontSize: "13px" }}
                >
                  {save == true ? "" : itemSupplier.supplierName}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    background: priceList.localForeign ? "#ddd" : "#fff",
                    padding: 0,
                    height: 10,
                    width: 30,
                    border:
                      errorLocalForeign ===
                      "❌ Local / Foreign Tidak Boleh Kosong"
                        ? "1px solid red"
                        : "none",
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
                      fontSize: "13px",
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
                    border:
                      errorCurrency === "❌ Currency Tidak Boleh Kosong"
                        ? "1px solid red"
                        : "none",
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
                    style={{ fontSize: "12px" }}
                    value={mataUang.currency}
                    onChange={handleChangeSelect("currency")}
                    SelectProps={{
                      sx: {
                        fontSize: "13px",
                      },

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
                    border:
                      errorPrice === "❌ Price Tidak Boleh Kosong"
                        ? "1px solid red"
                        : "none",
                  }}
                  component="th"
                >
                  <TextField
                    disabled={itemSupplier !== "" ? false : true}
                    variant="outlined"
                    type="number"
                    name="price"
                    value={priceList.price}
                    style={{
                      width: "100%",
                    }}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                      "& fieldset": { border: "none" },
                      fontSize: "13px",
                    }}
                    InputProps={{
                      sx: {
                        fontSize: "13px",
                      },

                      inputProps: { min: 0 },
                      disableUnderline: true,
                    }}
                  />
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    background: tanggal ? "#ddd" : "#fff",
                    padding: 0,
                    height: 10,
                    width: 10,
                    textAlign: "center",
                    border:
                      errorDate === "❌ Date Tidak Boleh Kosong"
                        ? "1px solid red"
                        : "none",
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
                        setErrorDate(false);
                      }}
                      InputProps={{
                        style: {
                          fontSize: "13px",
                        },
                      }}
                      renderInput={(params) => (
                        <TextField
                          size="small"
                          sx={{
                            "& fieldset": { border: "none" },
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
                    border:
                      errorQtyPricing === "❌ Qty Pricing Tidak Boleh Kosong"
                        ? "1px solid red"
                        : "none",
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
                    border:
                      errorMinOrder === "❌ Min Order Tidak Boleh Kosong"
                        ? "1px solid red"
                        : "none",
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
                    InputProps={{
                      sx: {
                        fontSize: "13px",
                      },
                      inputProps: { min: 0 },
                      disableUnderline: true,
                    }}
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
                    fontSize: "10px",
                    border:
                      errorDescription === "❌ Description Tidak Boleh Kosong"
                        ? "1px solid red"
                        : "none",
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
                    style={{ fontSize: "10px" }}
                    sx={{
                      "& fieldset": { border: "none", fontSize: "10px" },
                    }}
                    InputProps={{
                      sx: {
                        fontSize: "13px",
                      },
                      disableUnderline: true,
                    }}
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
              {/* {errorVendor && ( */}
              {/* // || // errorVendorName == true || // errorLocalForeign == true
              || // errorCurrency == true || // errorPrice == true || //
              errorDate == true || // errorQtyPricing == true || //
              errorMinOrder == true || // (errorDescription == true */}
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
                  {errorVendor && (
                    <span style={{ color: "red", fontSize: "10px" }}>
                      {errorVendor}
                    </span>
                  )}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    background: itemSupplier.supplierName ? "#ddd" : "#fff",
                    padding: "0px 5px",
                    height: 10,
                    width: 30,
                  }}
                  component="th"
                  style={{ fontSize: "13px" }}
                >
                  {errorVendorName && (
                    <span style={{ color: "red", fontSize: "10px" }}>
                      {errorVendorName}
                    </span>
                  )}
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
                  {" "}
                  {errorLocalForeign && (
                    <span style={{ color: "red", fontSize: "10px" }}>
                      {errorLocalForeign}
                    </span>
                  )}
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
                  {" "}
                  {errorCurrency && (
                    <span style={{ color: "red", fontSize: "10px" }}>
                      {errorCurrency}
                    </span>
                  )}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    background: priceList.price ? "#ddd" : "#fff",
                    padding: 0,
                    height: 10,
                  }}
                  component="th"
                >
                  {" "}
                  {errorPrice && (
                    <span style={{ color: "red", fontSize: "10px" }}>
                      {errorPrice}
                    </span>
                  )}
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
                  {" "}
                  {errorDate && (
                    <span style={{ color: "red", fontSize: "10px" }}>
                      {errorDate}{" "}
                    </span>
                  )}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    background: checked ? "#ddd" : "#fff",
                    margin: 0,
                    textAlign: "center",
                  }}
                  component="th"
                >
                  {" "}
                  {errorQtyPricing && (
                    <span style={{ color: "red", fontSize: "10px" }}>
                      {errorQtyPricing}{" "}
                    </span>
                  )}
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
                  {" "}
                  {errorMinOrder && (
                    <span style={{ color: "red", fontSize: "10px" }}>
                      {errorMinOrder}{" "}
                    </span>
                  )}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    background: priceList.description ? "#ddd" : "#fff",
                    padding: 0,
                    height: 10,
                    width: 30,
                    margin: 0,
                    textAlign: "center",
                    fontSize: "10px",
                  }}
                  component="th"
                >
                  {" "}
                  {errorDescription && (
                    <span style={{ color: "red", fontSize: "10px" }}>
                      {errorDescription}
                    </span>
                  )}
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
                ></StyledTableCell>
              </StyledTableRow>
              {/* )} */}
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

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={openSnackBerhasil}
          autoHideDuration={6000}
          onClose={handleCloseSnack}
        >
          <Alert
            onClose={handleCloseSnack}
            severity="success"
            sx={{ width: "100%" }}
          >
            Price List Berhasil Disimpan
          </Alert>
        </Snackbar>
        <Snackbar
          open={openSnackGagal}
          autoHideDuration={6000}
          onClose={handleCloseSnack}
        >
          <Alert
            onClose={handleCloseSnack}
            severity="error"
            sx={{ width: "100%" }}
          >
            Price List Berhasil Dihapus
          </Alert>
        </Snackbar>
      </Stack>

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
