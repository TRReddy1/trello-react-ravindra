import React, { useState, useEffect, useReducer } from "react";
import { getCheckItemsOnList } from "../api";
import AddCheckItemBtn from "./AddCheckItemBtn";
import CheckItem from "./CheckItem";
import { initialCheckItems, reducerCheckItems } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { fetching } from "./features/checkitemsSlice";

const ListCheckItems = ({ id, cardId }) => {
  // const [itemsList, setItemsList] = useState([]);
  // const [itemsList, dispatch] = useReducer(
  //   reducerCheckItems,
  //   initialCheckItems
  // );
  const checkitems = useSelector((state) => state.checkitems);
  const dispatch = useDispatch();

  useEffect(() => {
    getCheckItemsOnList(id).then((res) =>
      // dispatch({ type: "fetch-start", payload: res })
      dispatch(fetching({ checklistId: id, checkitems: res }))
    );
    // console.log(itemsList.checkitems);
  }, []);

  return (
    <div>
      {/* {console.log(checkitems)} */}
      {checkitems.length > 0 &&
        checkitems.map((checkitemsObj) => {
          if (checkitemsObj.checklistId === id) {
            return checkitemsObj.checkitems.map((item) => {
              return (
                <div key={item.id}>
                  <CheckItem item={item} listId={id} cardId={cardId} />
                </div>
              );
            });
          }
        })}
      <AddCheckItemBtn listId={id} />
    </div>
  );
};

export default ListCheckItems;
