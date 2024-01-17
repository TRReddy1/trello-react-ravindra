import React, { useState } from "react";
import { Button } from "@mui/material";
import { Card, CardActions, CardContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { createCheckItem } from "../api";

const AddCheckItemBtn = ({ listId, setItemsListFn }) => {
  const [inputedVal, setInputedVal] = useState("");
  const [showAddList, setShowAddList] = useState(true);

  const HandleCreate = () => {
    // console.log(inputedVal);
    createCheckItem(listId, inputedVal).then((res) =>
      setItemsListFn((old) => [...old, res])
    );
    setInputedVal("");
  };

  return (
    <>
      {showAddList ? (
        <Button
          variant="contained"
          style={{ height: "fit-content" }}
          onClick={() => setShowAddList((old) => !old)}
        >
          + Add checklist
        </Button>
      ) : (
        <Card
          variant="outlined"
          style={{ border: "solid", width: "fit-content", margin: "1rem" }}
        >
          <CardContent>
            <input
              type="text"
              value={inputedVal}
              placeholder=" Enter list"
              onChange={(e) => setInputedVal(e.target.value)}
              style={{ width: "13rem", height: "1.5rem" }}
            ></input>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                onClick={HandleCreate}
                style={{ marginLeft: "0rem" }}
              >
                Add list
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

export default AddCheckItemBtn;
