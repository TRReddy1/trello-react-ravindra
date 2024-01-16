import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { boardLists } from "../api";
import { Card, CardActions, CardContent } from "@mui/material";
import ThreeDots from "./ThreeDots";

import AdderBtn from "./AdderBtn";
import AddCardBtn from "./AddCardBtn";
import ListCards from "./ListCards";

const Lists = () => {
  const { id } = useParams();

  const [lists, setLists] = useState([]);

  useEffect(() => {
    boardLists(id).then((res) => setLists(res));
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: "5%",
          left: "20%",
          border: "solid",
          margin: "3rem",
        }}
      >
        {lists.map((list) => {
          return (
            <Card
              variant="outlined"
              style={{ border: "solid", margin: "1rem", width: "fit-content" }}
              key={list.id}
              id={list.id}
            >
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "1rem",
                  }}
                >
                  {list.name}
                  <ThreeDots id={list.id} lists={lists} setLists={setLists} />
                </div>
              </CardContent>
              <ListCards id={list.id} />
              <CardActions>
                {
                  <div style={{ marginTop: "1rem" }}>
                    <AddCardBtn id={list.id} />
                  </div>
                }
              </CardActions>
            </Card>
          );
        })}
        <AdderBtn boardId={id} setListsFn={setLists} />
      </div>
    </>
  );
};

export default Lists;
