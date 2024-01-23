import React from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

const Boards = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
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
        {!data ? (
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "2rem" }}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton animation="wave" />
            </div>
            <div style={{ marginRight: "2rem" }}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton animation="wave" />
            </div>
            <div style={{ marginRight: "2rem" }}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton animation="wave" />
            </div>
          </div>
        ) : (
          data.map((board) => {
            return (
              <div
                style={{
                  // border: "solid",
                  color: "white",
                  margin: "2em",
                  width: "13rem",
                  height: "8rem",
                  cursor: "pointer",
                  borderRadius: "5px",
                  padding: "1rem",
                  backgroundColor: `${board.prefs.backgroundColor}`,
                }}
                onClick={() => navigate(`/boards/${board.id}`)}
                key={board.id}
                id={board.id}
              >
                {board.name}
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Boards;
