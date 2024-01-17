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
        // border: "solid",
        margin: "3rem",
        width: "70%",
      }}
    >
      {data.map((board) => {
        return (
          <div
            style={{
              // border: "solid",
              color: "white",
              margin: "2em",
              width: "13rem",
              height: "8rem",
              borderRadius: "5px",
              backgroundColor: `${board.prefs.backgroundColor}`,
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
