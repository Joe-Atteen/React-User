let initialState = {
  users: [],
};

let UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      return {
        ...state,
        users: action.payload,
      };
    case "DELETE_USER":
      const filteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: filteredUsers,
      };
    case "USER_EDIT":
      const userEdit = state.users.map((user) =>
        user.id === action.payload.data.id ? action.payload.data : user
      );
      return {
        ...state,
        users: userEdit,
      };
    default:
      return state;
  }
};

export default UserReducer;
