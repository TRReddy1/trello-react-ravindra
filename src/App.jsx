import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Boards from "./components/Boards";
import { getBoards } from "./api";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Lists from "./components/Lists";
import { CssBaseline } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetching } from "./components/features/boardsSlice";

function App() {
  // const [boards, setBoards] = useState([]);
  const boards = useSelector((state) => state.boards);
  // console.log(typeof boards);
  const dispatch = useDispatch();
  const [newBoard, setNewBoard] = useState(""); // getting new board name from header click btn
  const [error, setError] = useState(null);

  useEffect(() => {
    getBoards()
      // .then((res) => setBoards(res))
      .then((res) => dispatch(fetching(res)))
      .catch((err) => setError(err.message));

    // console.log("upp");
  }, []);

  return (
    <>
      <CssBaseline>
        <NavLink>
          <Header
            getBoardName={setNewBoard}
            boardName={newBoard}
            // setBoards={dispatch}
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
