// for object
export const initialState = {
  checklists: [],
};

export const reducer = (state, action) => {
  //   console.log(action.payload);
  switch (action.type) {
    case "fetch-start":
      return {
        checklists: action.payload,
      };
    case "add-checklist":
      return {
        checklists: [...state.checklists, action.payload],
      };
    case "del-checklist":
      return {
        checklists: action.payload,
      };
    default:
      return state;
  }
};

// for array
export const initialCheckItems = [];

export const reducerCheckItems = (state, action) => {
  //   console.log(action.payload);
  switch (action.type) {
    case "fetch-start":
      return action.payload;
    case "add-item":
      return [...state, action.payload];
    case "del-item":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
