import {createStore, combineReducers} from "redux";
import dictionaryReducer from "./dictionary";

const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
});

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState);
};

export default configureStore;
