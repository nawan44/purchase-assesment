import * as React from "react";
import ChildDataLeft from "./childDataLeft";
import ChildDataRight from "./childDataRight";

export default function ChildData() {
  const [lihatData, setLihatData] = React.useState();
  const [selectData, setSelectData] = React.useState({
    aksiData: "",
    itemData: "",
  });
  return (
    <div
      style={{
        padding: "10px 30px",
        // background: "red",
        height: "700px",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      }}
    >
      <div
        style={{
          width: "30%",
          heeight: "100%",
          float: "left",
        }}
      >
        {" "}
        <ChildDataLeft
          selectData={selectData}
          setSelectData={setSelectData}
          lihatData={lihatData}
          setLihatData={setLihatData}
          itemData={selectData.itemData}
        />
      </div>
      <div
        style={{
          width: "70%",
          float: "left",
        }}
      >
        {" "}
        <ChildDataRight
          selectData={selectData}
          setSelectData={setSelectData}
          lihatData={lihatData}
          setLihatData={setLihatData}
          itemData={selectData.itemData}
        />
      </div>
    </div>
  );
}
