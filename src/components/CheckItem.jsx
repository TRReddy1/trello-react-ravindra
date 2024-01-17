import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { deleteCheckItem } from "../api";
import DeleteIcon from "@mui/icons-material/Delete";

const CheckItem = ({ item, listId, setItemsListFn }) => {
  const [itemChecked, setItemChecked] = useState(false);

  const handleChecker = (e) => {
    if (e.target.checked) {
      setItemChecked(true);
    } else {
      setItemChecked(false);
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
