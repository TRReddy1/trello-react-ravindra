import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { deleteCard } from "../api";

const EditCard = ({ id, setCardsFn }) => {
  const [showDelete, setShowDelete] = useState(false);

  const deleting = (e) => {
    var targetId = e.target.id;
    // console.log(targetId);
    deleteCard(targetId);
    setCardsFn((old) => old.filter((o) => o.id !== targetId));
  };
  return (
    <div>
      {" "}
      <EditIcon
        style={{ cursor: "pointer" }}
        onClick={() => setShowDelete((old) => !old)}
      />
      {showDelete && (
        <div
          style={{
            position: "absolute",
            marginLeft: "1rem",
            // marginTop: "2rem",
            zIndex: "5",
            padding: "1rem",
            backgroundColor: "grey",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
            // border: "solid",
          }}
          id={id}
          onClick={(e) => deleting(e)}
        >
          DELETE
        </div>
      )}
    </div>
  );
};

export default EditCard;
