import React from "react";

import CheckItems from "./CheckItems";

const CheckLists = ({ checkLists, cardId, setChecksFn }) => {
  // console.log(checkLists);
  return (
    <>
      {checkLists.length > 0 &&
        checkLists.map((check) => {
          return (
            <div key={check.id}>
              <CheckItems
                checked={check}
                cardId={cardId}
                setChecksFn={setChecksFn}
              />
              {/* <div>{check.name}</div> */}
            </div>
          );
        })}
      {/* <div>hello</div> */}
    </>
  );
};

export default CheckLists;
