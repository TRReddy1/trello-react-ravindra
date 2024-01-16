import React from "react";
import { useNavigate } from "react-router-dom";

const Boards = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        position: "absolute",
        top: "5%",
        left: "20%",
        border: "solid",
        margin: "3rem",
        width: "70%",
      }}
    >
      {data.map((board) => {
        return (
          <div
            style={{
              border: "solid",
              color: "black",
              margin: "2em",
              width: "13rem",
              height: "8rem",
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
          </div>
        );
      })}
    </div>
  );
};

export default Boards;
