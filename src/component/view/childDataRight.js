import * as React from "react";
import Button from "@mui/material/Button";
import ChildDataRightTable from "./childDataRightTable";
import { Typography } from "@mui/material";

export default function ChildDataRight(props) {
  const { lihatData, setLihatData, itemData } = props;
  const [openRow, setOpenRow] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
    console.log("AAAA");
  };

  console.log("itemData==============", itemData);
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
            background: "#00388B",
            fontWeight: "bold",
            color: "#fff",
            width: "12%",
            float: "left",
            textAlign: "center",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Price List
        </div>
        <div
          style={{
            fontWeight: "bold",
            background: "#ddd",
            color: "#000",
            width: "88%",
            float: "left",
            textAlign: "left",
            padding: "5px 20px",
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
          <Button
            variant="contained"
            size="small"
            style={{
              background: "#00388B",
              fontWeight: "bold",
              textTransform: "none",
            }}
            onClick={() => {
              setOpenRow(true);
            }}
          >
            + Tambah
          </Button>
        </div>
      </div>
      <ChildDataRightTable
        itemData={itemData}
        openRow={openRow}
        setOpenRow={setOpenRow}
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleOpenModal={handleOpenModal}
      />
    </div>
  );
}
