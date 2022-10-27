let initialState = {
  users: null,
};

let AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_user":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
