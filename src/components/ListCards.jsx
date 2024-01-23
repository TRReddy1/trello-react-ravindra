import React, { useState, useEffect } from "react";
import { getCards } from "../api";
import AddCardBtn from "./AddCardBtn";
import EditCard from "./EditCard";
import ModalCheck from "./ModalCheck";
import { useSelector, useDispatch } from "react-redux";
import { fetching } from "./features/cardsSlice";

const ListCards = ({ id }) => {
  // const [cards, setCards] = useState([]);

  const cardsObj = useSelector((state) => state.cards);

  const dispatch = useDispatch();

  useEffect(() => {
    getCards(id).then((res) => dispatch(fetching({ id: id, cards: res })));
    // console.log(cardsObj);
  }, []);

  return (
    <div>
      {cardsObj &&
        cardsObj.map((cardObj) => {
          if (cardObj.id === id) {
            return cardObj.cards.map((card) => {
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
                    <EditCard cardId={card.id} listId={id} />
                  </div>
                </>
              );
            });
          }
        })}
      <AddCardBtn id={id} />
    </div>
  );
};

export default ListCards;
