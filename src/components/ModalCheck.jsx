import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckLists from "./CheckLists";
import AddCheckList from "./AddCheckList";
import { useState, useEffect } from "react";
import { getCheckLists } from "../api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  //   height: 600,
  bgcolor: "background.paper",
  border: "2px  #000",
  boxShadow: 24,
  px: 1,
};

const ModalCheck = ({ id, cardName }) => {
  const [checks, setChecks] = useState([]);

  useEffect(() => {
    getCheckLists(id).then((res) => setChecks(res));
    // console.log(checks);
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
          // paddingLeft: "0.3rem",
          // border: "black solid",
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
          {/* <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ border: "solid", width: "fit-content" }}
          >
            Text in a modal
          </Typography> */}

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
                // backgroundColor: "red",
                // width: "90%",
              }}
            >
              {cardName}
              <CheckLists
                checkLists={checks}
                cardId={id}
                setChecksFn={setChecks}
              />
            </div>
            <div
              style={{
                display: "flex",
                // backgroundColor: "grey",
                // width: "50%",
              }}
            >
              <AddCheckList id={id} setChecksFn={setChecks} />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModalCheck;
