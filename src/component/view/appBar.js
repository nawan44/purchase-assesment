import { Tooltip, IconButton } from "@mui/material";
import Avatar from "../../assets/avatar/avatar.png";

export default function TopBar() {
  return (
    <>
      <div style={{ background: "#00388B", height: "90px" }}>
        <div
          style={{
            float: "left",
            width: "10%",
            margin: "0 20px 0 50px",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "0 0 40% 40%",
              border: " 1px solid ",
              width: "80%",
              height: "85px",
            }}
          ></div>
        </div>
        <div
          style={{
            float: "left",
            width: "65%",
            padding: "22px 0",
          }}
        >
          <div
            style={{
              width: "40%",
              background: "#fff",
              borderRadius: "5px",
              border: " 1px solid ",
              padding: "20px",
              height: "20px",
            }}
          ></div>
        </div>
        <div
          style={{
            float: "left",
            width: "20%",
            padding: "20px 30px",
          }}
        >
          <Tooltip style={{ float: "left" }}>
            <IconButton sx={{ p: 0 }}>
              <img alt="Remy Sharp" width={50} src={Avatar} />
            </IconButton>
          </Tooltip>
          <div
            style={{
              float: "right",
              width: "70%",
            }}
          >
            <h5
              style={{ color: "#fff", textAlign: "left", margin: "0 0 0 15px" }}
            >
              Hello,
            </h5>
            <h5
              style={{
                color: "#fff",
                textAlign: "left",
                margin: "0 0 0 15px",
                fontWeight: "bold",
              }}
            >
              I'm Ana!
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
