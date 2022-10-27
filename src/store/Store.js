import { legacy_createStore, combineReducers } from "redux";
import UserReducer from "../reducer/UserReducer";
import AuthReducer from "../reducer/AuthReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

let reducers = combineReducers({ UserReducer, AuthReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

let store = legacy_createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
