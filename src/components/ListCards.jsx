import React, { useState, useEffect } from "react";
import { getCards } from "../api";
import AddCardBtn from "./AddCardBtn";
import EditCard from "./EditCard";
import ModalCheck from "./ModalCheck";

const ListCards = ({ id }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards(id).then((res) => setCards(res));
  }, []);

  // const checkList = (e) => {
  //   // console.log("card clicked");
  //   // getCheckLists(e.target.id);
  // };

  return (
    <div>
      {cards.length > 0 &&
        cards.map((card) => {
          return (
            <>
              <div style={{ display: "flex", marginBottom: "1rem" }}>
                <div
                  style={{
                    backgroundColor: "grey",
                    display: "flex",
                    height: "2rem",
                    width: "12rem",
                    marginLeft: "3%",
                    marginRight: "3%",
                    borderRadius: "5px",
                  }}
                  key={card.id}
                  id={card.id}
                  // onClick={(e) => checkList(e)}
                >
                  {/* {card.name} */}
                  <ModalCheck id={card.id} cardName={card.name} />
                </div>
                <EditCard id={card.id} setCardsFn={setCards} />
              </div>
            </>
          );
        })}
      {/* <div style={{ marginTop: "1rem" }}> */}
      <AddCardBtn id={id} setCardsFn={setCards} />
      {/* </div> */}
    </div>
  );
};

export default ListCards;
