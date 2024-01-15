import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Boards from "./components/Boards";
import { getBoards } from "./api";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Lists from "./components/Lists";

function App() {
  const [boards, setBoards] = useState([]);
  const [newBoard, setNewBoard] = useState(""); // getting new board name from header click btn

  useEffect(() => {
    const fetch = async () => {
      const res = await getBoards();
      setBoards(res);
    };
    fetch();
    // console.log(boards);
  }, [boards]);

  return (
    <>
      <NavLink>
        <Header getBoardName={setNewBoard} boardName={newBoard} />
        <SideBar />
      </NavLink>
      <Routes>
        {/* <div style={{ display: "flex" }}> */}
        <Route path="/" element={<Boards data={boards} />}></Route>
        {/* </div> */}
        <Route path="/boards/:id" element={<Lists />}></Route>
      </Routes>
    </>
  );
}

export default App;
