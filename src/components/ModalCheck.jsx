import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckLists from "./CheckLists";
import AddCheckList from "./AddCheckList";
import { useState, useEffect, useReducer } from "react";
import { getCheckLists } from "../api";
import { initialState, reducer } from "./reducer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  //   height: 600,
  bgcolor: "background.paper",
  borderRadius: "5px",
  border: "2px  #000",
  boxShadow: 24,
  px: 1,
};

const ModalCheck = ({ id, cardName }) => {
  // const [checks, setChecks] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCheckLists(id).then((res) => {
      dispatch({ type: "fetch-start", payload: res });
    });
    // console.log(state.checklists);
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        style={{
          color: "white",
          width: "12rem",
          paddingRight: "62%",
        }}
      >
        {cardName}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
              }}
            >
              {cardName}
              <CheckLists
                checkLists={state.checklists}
                cardId={id}
                setChecksFn={dispatch}
              />
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <AddCheckList id={id} setChecksFn={dispatch} />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModalCheck;
