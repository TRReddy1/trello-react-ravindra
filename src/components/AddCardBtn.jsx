import React, { useState } from "react";
import { Button } from "@mui/material";
import { Card, CardActions, CardContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { createCard } from "../api";

const AddCardBtn = ({ id, setCardsFn }) => {
  const [inputedVal, setInputedVal] = useState("");
  const [showAddList, setShowAddList] = useState(true);
  // const [cardId, setCardId] = useState([]);

  const HandleCreate = () => {
    createCard(id, inputedVal).then((res) =>
      setCardsFn((old) => [...old, res])
    );
    // setCardsFn((old) => [...old, newCard]);
    setInputedVal("");
    // console.log(cardId);
  };

  return (
    <>
      {showAddList ? (
        <Button
          variant="contained"
          style={{ height: "3rem", margin: "1rem", width: "11rem" }}
          onClick={() => setShowAddList((old) => !old)}
        >
          + Add a card
        </Button>
      ) : (
        <Card variant="outlined">
          <CardContent>
            <input
              type="text"
              value={inputedVal}
              placeholder=" Enter card name"
              onChange={(e) => setInputedVal(e.target.value)}
              style={{ height: "2rem" }}
            ></input>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                onClick={HandleCreate}
                style={{ marginLeft: "-0.3rem" }}
              >
                Add a card
              </Button>
              <Button onClick={() => setShowAddList((old) => !old)}>
                <CloseIcon />
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AddCardBtn;
