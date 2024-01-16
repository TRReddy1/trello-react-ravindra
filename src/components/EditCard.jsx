import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

const EditCard = ({ id }) => {
  const [showDelete, setShowDelete] = useState(false);

  const deleteCard = (e) => {
    console.log(e.target.id);
  };
  return (
    <div>
      {" "}
      <EditIcon onClick={() => setShowDelete((old) => !old)} />
      {showDelete && (
        <div
          style={{
            position: "absolute",
            marginLeft: "1rem",
            // marginTop: "2rem",
            zIndex: "5",
            padding: "1rem",
            backgroundColor: "grey",
            border: "solid",
          }}
          id={id}
          onClick={(e) => deleteCard(e)}
        >
          DELETE
        </div>
      )}
    </div>
  );
};

export default EditCard;
