import { legacy_createStore } from "redux";
import UserReducer from "../reducer/UserReducer";

let store = legacy_createStore(UserReducer);

export default store;
