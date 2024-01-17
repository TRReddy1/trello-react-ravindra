import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { Typography } from "@mui/material";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "15rem",
        height: "100vh",
        backgroundColor: "grey",
        textAlign: "end",
        position: "fixed",
        zIndex: "6",
      }}
    >
      {/* <Typography variant="h5" marginRight={"2rem"} paddingTop={"2rem"}> */}
      <Button
        style={{
          marginRight: "2rem",
          marginTop: "5rem",
          fontSize: "1.8rem",
          color: "white",
        }}
        onClick={() => navigate(-1)}
      >
        Boards
      </Button>
      {/* </Typography> */}
    </div>
  );
};

export default SideBar;
