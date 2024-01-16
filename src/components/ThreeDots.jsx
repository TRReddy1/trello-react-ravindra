import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";
import { archiveList } from "../api";

const ThreeDots = ({ id, lists, setLists }) => {
  const [showDelete, setShowDelete] = useState(false);

  const deleteHandler = (e) => {
    e.stopPropagation();
    setShowDelete((old) => !old);
    // console.log("inside delete");
  };

  const deleteList = (e) => {
    e.stopPropagation();
    const targetId = e.target.id;
    // console.log(targetId);
    archiveList(targetId).then((res) => {
      var tempList = lists.filter((list) => list.id !== res.id);
      setLists(tempList);
    });
    // setShowDelete(false);
    // console.log("inside list");
  };

  return (
    <div>
      {/* {" "}
      <IconButton
        aria-label="settings"
        style={{ marginLeft: "4rem" }}
        
      > */}
      <MoreHorizIcon
        style={{ marginLeft: "5rem" }}
        onClick={(e) => deleteHandler(e)}
      />
      {showDelete && (
        <div
          style={{
            position: "absolute",
            marginLeft: "6rem",
            zIndex: "5",
            padding: "1rem",
            backgroundColor: "grey",
            border: "solid",
          }}
          id={id}
          onClick={(e) => deleteList(e)}
        >
          DELETE
        </div>
      )}
      {/* </IconButton> */}
    </div>
  );
};

export default ThreeDots;
