import React, { useState, useEffect } from "react";
import { getCards } from "../api";
import EditCard from "./EditCard";

const ListCards = ({ id }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // const fetchCards = async (id) => {
    //   const result = await getCards(id);
    //   setCards(result);
    // };

    // fetchCards();
    getCards(id).then((res) => setCards(res));
    // console.log(cards[0]);
  }, []);

  return (
    <div>
      {cards.length > 0 &&
        cards.map((card) => {
          return (
            <>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    backgroundColor: "grey",
                    display: "flex",
                    height: "2rem",
                    width: "80%",
                    marginLeft: "3%",
                    marginRight: "3%",
                  }}
                  key={card.id}
                  id={card.id}
                >
                  {card.name}
                </div>
                <EditCard id={card.id} />
              </div>
            </>
          );
        })}
    </div>
  );
};

export default ListCards;
