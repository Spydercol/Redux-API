import { applyMiddleware, combineReducers, createStore } from "redux";
import { albumReducer } from "./albumsReducer";
import { userReducer } from "./usersReducer";
import { photosReducer } from "./photosReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  users: userReducer,
  albums: albumReducer,
  photos: photosReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
