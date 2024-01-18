import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { boardLists } from "../api";
import { Card, CardActions, CardContent } from "@mui/material";
import ThreeDots from "./ThreeDots";

import AdderBtn from "./AdderBtn";
import ListCards from "./ListCards";
import Skeleton from "@mui/material/Skeleton";

const Lists = () => {
  const { id } = useParams();

  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    boardLists(id)
      .then((res) => {
        setLists(res);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error ? (
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
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "5%",
            left: "20%",
            // border: "solid",
            margin: "3rem",
            overflowX: "auto",
          }}
        >
          {loading ? (
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "2rem" }}>
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton animation="wave" />
              </div>
              <div style={{ marginRight: "2rem" }}>
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton animation="wave" />
              </div>
              <div style={{ marginRight: "2rem" }}>
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton animation="wave" />
              </div>
            </div>
          ) : (
            lists.map((list) => {
              return (
                <Card
                  variant="outlined"
                  style={{ margin: "1rem", width: "15rem" }}
                  key={list.id}
                  id={list.id}
                >
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginLeft: "1rem",
                      }}
                    >
                      {list.name}
                      <ThreeDots
                        id={list.id}
                        lists={lists}
                        setLists={setLists}
                      />
                    </div>
                  </CardContent>
                  <CardActions>
                    <ListCards id={list.id} />
                  </CardActions>
                </Card>
              );
            })
          )}
          <AdderBtn boardId={id} setListsFn={setLists} />
        </div>
      )}{" "}
    </>
  );
};

export default Lists;
