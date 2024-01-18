import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Boards from "./components/Boards";
import { getBoards } from "./api";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Lists from "./components/Lists";
import { CssBaseline } from "@mui/material";

function App() {
  const [boards, setBoards] = useState([]);
  const [newBoard, setNewBoard] = useState(""); // getting new board name from header click btn
  const [error, setError] = useState(null);

  useEffect(() => {
    getBoards()
      .then((res) => setBoards(res))
      .catch((err) => setError(err.message));

    // console.log(error);
  }, []);

  return (
    <>
      <CssBaseline>
        <NavLink>
          <Header
            getBoardName={setNewBoard}
            boardName={newBoard}
            setBoards={setBoards}
          />
          <SideBar />
        </NavLink>
        <Routes>
          {/* <div style={{ display: "flex" }}> */}
          <Route
            path="/"
            element={
              error ? (
                <div
                  style={{
                    position: "absolute",
                    top: "20%",
                    left: "20%",
                    fontSize: "4rem",
                  }}
                >
                  {error}
                </div>
              ) : (
                <Boards data={boards} />
              )
            }
          ></Route>
          {/* </div> */}
          <Route path="/boards/:id" element={<Lists />}></Route>
        </Routes>
      </CssBaseline>
    </>
  );
}

export default App;
