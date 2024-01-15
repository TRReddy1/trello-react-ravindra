import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { boardLists } from "../api";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AdderBtn from "./AdderBtn";

const Lists = () => {
  const { id } = useParams();

  const [lists, setLists] = useState([]);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    // setLists(async () => await boardLists(id));
    // // console.log(boardLists(id));
    // console.log(lists.length);
    const fetchLists = async () => {
      try {
        const result = await boardLists(id);
        setLists(result);
      } catch (error) {
        console.error("Error fetching lists:", error);
      }
    };

    fetchLists();
  }, [id, lists]);

  const deleteHandler = () => {
    setShowDelete((old) => !old);
  };

  return (
    <>
      <Grid
        container
        //   spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 11 }}
        style={{
          border: "solid",
          margin: "3rem",
          width: "80%",
          position: "absolute",
          top: "5%",
          left: "15%",
          overflow: "hidden",
        }}
      >
        {lists.map((list) => {
          return (
            //   <Grid
            //     item
            //     xs={2}
            //     sm={3}
            //     md={3}
            //     height={"15rem"}
            //     style={{
            //       border: "solid",
            //       color: "black",
            //       margin: "2em",
            //     }}
            //     // onClick={() => navigate(`/boards/${board.id}`)}
            //     key={list.id}
            //     id={list.id}
            //   >
            //     {list.name}
            //   </Grid>
            <Card
              variant="outlined"
              style={{ border: "solid", margin: "1rem" }}
              key={list.id}
              id={list.id}
            >
              <CardContent>
                {list.name}
                <IconButton
                  aria-label="settings"
                  style={{ marginLeft: "4rem" }}
                  onClick={deleteHandler}
                >
                  <MoreHorizIcon />
                  {showDelete && (
                    <div
                      style={{
                        position: "absolute",
                        top: "70%",
                        left: "30%",
                        zIndex: "5",
                        backgroundColor: "red",
                      }}
                    >
                      DELETE
                    </div>
                  )}
                </IconButton>
              </CardContent>
              <CardActions>{/* <AdderBtn /> */}</CardActions>
            </Card>
          );
        })}
        <AdderBtn boardId={id} />
      </Grid>
    </>
  );
};

export default Lists;
