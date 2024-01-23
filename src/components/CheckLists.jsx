import React from "react";

import CheckItems from "./CheckItems";

const CheckLists = ({ checkLists, cardId }) => {
  // console.log(checkLists);
  return (
    <>
      {checkLists.length > 0 &&
        checkLists.map((checklistObj) => {
          if (checklistObj.cardId === cardId) {
            return checklistObj.checklists.map((checklist) => {
              // console.log(checklist);
              return (
                <div key={checklist.id}>
                  <CheckItems checked={checklist} cardId={cardId} />
                  {/* <div>{check.name}</div> */}
                </div>
              );
            });
          }
        })}
      {/* <div>hello</div> */}
    </>
  );
};

export default CheckLists;
