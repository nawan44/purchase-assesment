import TopBar from "./appBar";
import ChildData from "./childData";
import ChildMenu from "./childMenu";
import MenuBar from "./menuBar";

const Layout = () => {
  return (
    <>
      <TopBar />
      <MenuBar />
      <div
        style={{
          width: "100%",
          height: "80px",
          padding: "20px 50px",
        }}
      >
        <h1
          style={{
            textAlign: "left",
            color: "#00388B",
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          PURCHASE
        </h1>
      </div>
      <div style={{ padding: "30px 50px" }}>
        <ChildMenu />
        <ChildData />
      </div>
    </>
  );
};

export default Layout;
