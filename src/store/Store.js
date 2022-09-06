import { legacy_createStore } from "redux";
import UserReducer from "../reducer/UserReducer";

let Store = legacy_createStore(UserReducer);

export default Store;
