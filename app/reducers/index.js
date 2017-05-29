// @flow
import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";
import game from "./game";

const rootReducer = combineReducers({
	game,
	router
});

export default rootReducer;
