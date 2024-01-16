import React, { useState } from "react";
import { Button } from "@mui/material";
import { Card, CardActions, CardContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { createCard } from "../api";

const AddCardBtn = ({ id }) => {
  const [inputedVal, setInputedVal] = useState("");
  const [showAddList, setShowAddList] = useState(true);
  // const [cardId, setCardId] = useState([]);

  const HandleCreate = () => {
    const newCard = createCard(id, inputedVal).then((res) => res);
    // setCardId(() => [...cardId, newId]);
    // console.log(cardId);
    setInputedVal("");
  };

  return (
    <>
      {showAddList ? (
        <Button
          variant="contained"
          style={{ height: "3rem", margin: "1rem" }}
          onClick={() => setShowAddList((old) => !old)}
        >
          + Add a card
        </Button>
      ) : (
        <Card variant="outlined" style={{ border: "solid" }}>
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
