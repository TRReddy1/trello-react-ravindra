import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { deleteCheckItem, updateStateCheck } from "../api";

const CheckItem = ({ item, listId, setItemsListFn, cardId }) => {
  const [itemChecked, setItemChecked] = useState(false);
  const [itemState, setItemState] = useState("complete");

  const handleChecker = (e) => {
    if (e.target.checked) {
      setItemChecked(true);
      setItemState("complete");
      updateStateCheck(cardId, item.id, itemState);
    } else {
      setItemChecked(false);
      setItemState("incomplete");
      updateStateCheck(cardId, item.id, itemState);
    }
  };

  const handleDelete = (e) => {
    var targetid = e.target.id;
    // console.log(targetid);
    deleteCheckItem(listId, targetid).then((res) => {
      setItemsListFn((old) => {
        return old.filter((o) => o.id !== targetid);
      });
    });
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem 0rem",
      }}
    >
      <div style={{ textDecoration: itemChecked ? "line-through" : "none" }}>
        <Checkbox {...label} onChange={(e) => handleChecker(e)} /> {item.name}
      </div>
      <Button
        variant="contained"
        size="small"
        style={{ height: "2rem" }}
        id={item.id}
        onClick={(e) => handleDelete(e)}
      >
        delete
      </Button>
    </div>
  );
};

export default CheckItem;
