import * as React from "react";
import ChildDataLeft from "./childDataLeft";
import ChildDataRight from "./childDataRight";

export default function ChildData() {
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
        <ChildDataLeft />
      </div>
      <div
        style={{
          width: "70%",
          float: "left",
        }}
      >
        {" "}
        <ChildDataRight />
      </div>
    </div>
  );
}
