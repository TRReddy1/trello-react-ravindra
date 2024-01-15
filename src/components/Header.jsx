import React, { useState } from "react";
import { Button } from "@mui/material";
import { createBoard } from "../api";

const Header = ({ getBoardName, boardName }) => {
  const [displayCreate, setDisplayCreate] = useState(false);

  const createCard = () => {
    setDisplayCreate((old) => !old);
  };

  const textHandler = () => {
    createBoard(boardName);
    getBoardName("");
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#0055cc",
          height: "4rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src="https://trello.com/assets/87e1af770a49ce8e84e3.gif"
          style={{ width: "8rem", height: "1.8rem", marginLeft: "1rem" }}
          alt=""
        />

        <div>
          <Button variant="contained" onClick={createCard}>
            create
          </Button>
          {displayCreate && (
            <div style={{ position: "absolute" }}>
              <input
                type="text"
                value={boardName}
                onChange={(e) => getBoardName(e.target.value)}
              />
              <Button
                variant="contained"
                style={{ height: "1rem" }}
                onClick={textHandler}
              >
                submit
              </Button>
            </div>
          )}
        </div>

        <div>
          <img
            src="https://trello-members.s3.amazonaws.com/65a2334c0fdeaac9e93f6a16/282a297cfb4a105944e29d482b80e1fe/50.png"
            alt=""
            style={{ height: "2.5rem", marginRight: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
