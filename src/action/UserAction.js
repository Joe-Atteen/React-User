export const AddNewUser = (newUser) => {
  return {
    type: "ADD_NEW_USER",
    payload: newUser,
  };
};

export const DeleteUser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};

export const UserEdit = (data) => {
  return {
    type: "USER_EDIT",
    payload: { data },
  };
};
