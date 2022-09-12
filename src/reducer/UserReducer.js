import { v4 as uuidv4 } from "uuid";

let initialState = {
  users: [
    { name: "Obinim", contact: 203755275, location: "Taadi", id: uuidv4() },
    { name: "Abanga", contact: 214567663, location: "Bongo", id: uuidv4() },
    { name: "Abanga", contact: 214567663, location: "Bongo", id: uuidv4() },
    { name: "Abanga", contact: 214567663, location: "Bongo", id: uuidv4() },
  ],
};

let UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default UserReducer;
