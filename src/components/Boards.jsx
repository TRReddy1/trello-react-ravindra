import React from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Boards = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      //   spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 13 }}
      style={{
        border: "solid",
        margin: "3rem",
        width: "80%",
        position: "absolute",
        top: "5%",
        left: "15%",
        overflow: "hidden",
      }}
    >
      {data.map((board) => {
        return (
          <Grid
            item
            xs={2}
            sm={3}
            md={3}
            height={"15rem"}
            style={{
              border: "solid",
              color: "black",
              margin: "2em",
              //   backgroundImage: `url(${
              //     board.prefs.backgroundImageScaled[Math.floor(Math.random() * 9)]
              //       .url
              //   })`,
            }}
            onClick={() => navigate(`/boards/${board.id}`)}
            key={board.id}
            id={board.id}
          >
            {board.name}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Boards;
