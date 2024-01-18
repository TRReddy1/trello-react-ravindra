import React, { useState, useEffect } from "react";
import { getCheckItemsOnList } from "../api";
import AddCheckItemBtn from "./AddCheckItemBtn";
import CheckItem from "./CheckItem";

const ListCheckItems = ({ id, cardId }) => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    getCheckItemsOnList(id).then((res) => setItemsList(res));
  }, []);

  return (
    <div>
      {itemsList.length > 0 &&
        itemsList.map((item) => {
          return (
            <div key={item.id}>
              <CheckItem
                item={item}
                listId={id}
                setItemsListFn={setItemsList}
                cardId={cardId}
              />
            </div>
          );
        })}
      <AddCheckItemBtn listId={id} setItemsListFn={setItemsList} />
    </div>
  );
};

export default ListCheckItems;
