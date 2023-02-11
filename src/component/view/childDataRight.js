import * as React from "react";
import Button from "@mui/material/Button";
import ChildDataRightTablePrice from "./childDataRightTablePrice";
import ChildDataRightTableHistory from "./childDataRightTableHistory";

import { Typography } from "@mui/material";

export default function ChildDataRight(props) {
  const { lihatData, setLihatData, itemData } = props;
  const [selectSupplier, setSelectSupplier] = React.useState({
    itemSupplier: "",
  });
  const [buttonHistory, setButtonHistory] = React.useState(false);
  const [buttonPrice, setButtonPrice] = React.useState(true);

  const [openRow, setOpenRow] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div
      style={{
        padding: "10px 30px",
        width: "100%",
        floatL: "left",
      }}
    >
      <div
        style={{
          width: "100%",
          background: "green",
        }}
      >
        <div
          style={{
            background: buttonPrice == true ? "#00388B" : "#ddd",
            fontWeight: "bold",
            color: buttonPrice == true ? "#fff" : "#000",
            width: "12%",
            float: "left",
            textAlign: "center",
            padding: "5px",
            borderRadius: "5px",
          }}
          onClick={() => {
            setButtonHistory(false);
            setButtonPrice(true);
          }}
        >
          Price List
        </div>
        <div
          style={{
            fontWeight: "bold",
            background: buttonPrice == true ? "#ddd" : "#00388B",
            color: buttonPrice == true ? "#000" : "#fff",
            width: "88%",
            float: "left",
            textAlign: "left",
            padding: "5px 20px",
          }}
          onClick={() => {
            setButtonHistory(true);
            setButtonPrice(false);
          }}
        >
          PO History{" "}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margin: "20px 0",
          float: "right",
          textAlign: "right",
        }}
      >
        <div
          style={{
            width: "90%",
            float: "left",
            padding: "2px 0",
          }}
        >
          {lihatData && (
            <h5
              style={{
                textAlign: "left",
                fontWeight: "bold",
                color: "#073E8B",
              }}
            >
              {itemData.productId} - {itemData.productName}
            </h5>
          )}
        </div>
        <div style={{ width: "10%", float: "right" }}>
          {buttonHistory == true ? (
            <div></div>
          ) : (
            <Button
              variant="contained"
              size="small"
              style={{
                color: "#fff",
                background: "#00388B",
                fontWeight: "bold",
                textTransform: "none",
              }}
              onClick={() => {
                setOpenRow(true);
              }}
              disabled={lihatData ? false : true}
            >
              + Tambah
            </Button>
          )}
        </div>
      </div>
      {buttonHistory == false ? (
        <ChildDataRightTablePrice
          itemData={itemData}
          openRow={openRow}
          setOpenRow={setOpenRow}
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleOpenModal={handleOpenModal}
          selectSupplier={selectSupplier}
          setSelectSupplier={setSelectSupplier}
          itemSupplier={selectSupplier.itemSupplier}
        />
      ) : (
        <ChildDataRightTableHistory
          itemData={itemData}
          openRow={openRow}
          setOpenRow={setOpenRow}
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleOpenModal={handleOpenModal}
          selectSupplier={selectSupplier}
          setSelectSupplier={setSelectSupplier}
          itemSupplier={selectSupplier.itemSupplier}
        />
      )}
    </div>
  );
}
