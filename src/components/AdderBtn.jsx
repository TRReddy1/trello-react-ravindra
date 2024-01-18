import React, { useState } from "react";
import { Button } from "@mui/material";
import { Card, CardActions, CardContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { createList } from "../api";

const AdderBtn = ({ boardId, setListsFn }) => {
  const [inputedVal, setInputedVal] = useState("");
  const [showAddList, setShowAddList] = useState(true);

  const HandleCreate = () => {
    if (inputedVal !== "") {
      createList(boardId, inputedVal).then((res) =>
        setListsFn((old) => [...old, res])
      );
      setInputedVal("");
    }
  };

  return (
    <>
      {showAddList ? (
        <Button
          variant="contained"
          style={{ height: "3rem", width: "15rem", margin: "1rem" }}
          onClick={() => setShowAddList((old) => !old)}
        >
          + Add another list
        </Button>
      ) : (
        <Card variant="outlined" style={{ width: "15rem", margin: "1rem" }}>
          <CardContent>
            <input
              type="text"
              value={inputedVal}
              placeholder=" Enter list name"
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

export default AdderBtn;
