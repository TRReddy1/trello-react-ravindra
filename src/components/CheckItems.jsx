import React from "react";
import { Button } from "@mui/material";
import { deleteCheckList } from "../api";
import ListCheckItems from "./ListCheckItems";
import { useDispatch } from "react-redux";
import { deletingChecklist } from "./features/checklistsSlice";

const CheckItems = ({ checked, cardId }) => {
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    var targetId = e.target.id;
    deleteCheckList(cardId, targetId).then((res) =>
      // setChecksFn({ type: "del-checklist", payload: res })
      dispatch(deletingChecklist({ cardId: cardId, checklists: res }))
    );
  };
  // console.log(check);
  return (
    <div style={{ margin: "1rem" }}>
      <div
        style={{
          display: "flex",
          // border: "solid",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "1rem",
          width: "19rem",
        }}
      >
        <div style={{ margin: "0rem 1rem" }}>
          {/* <CheckBoxIcon /> */}
          {checked.name}
        </div>
        <div>
          <Button
            variant="contained"
            size="small"
            onClick={(e) => deleteHandler(e)}
            id={`${checked.id}`}
          >
            Delete
          </Button>
        </div>
      </div>
      <div style={{ margin: "1rem" }}>
        <ListCheckItems id={checked.id} cardId={cardId} />
      </div>
    </div>
  );
};

export default CheckItems;
