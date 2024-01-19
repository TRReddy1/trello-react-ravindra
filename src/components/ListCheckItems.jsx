import React, { useState, useEffect, useReducer } from "react";
import { getCheckItemsOnList } from "../api";
import AddCheckItemBtn from "./AddCheckItemBtn";
import CheckItem from "./CheckItem";
import { initialCheckItems, reducerCheckItems } from "./reducer";

const ListCheckItems = ({ id, cardId }) => {
  // const [itemsList, setItemsList] = useState([]);
  const [itemsList, dispatch] = useReducer(
    reducerCheckItems,
    initialCheckItems
  );

  useEffect(() => {
    getCheckItemsOnList(id).then((res) =>
      dispatch({ type: "fetch-start", payload: res })
    );
    // console.log(itemsList.checkitems);
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
                setItemsListFn={dispatch}
                cardId={cardId}
              />
            </div>
          );
        })}
      <AddCheckItemBtn listId={id} setItemsListFn={dispatch} />
    </div>
  );
};

export default ListCheckItems;
