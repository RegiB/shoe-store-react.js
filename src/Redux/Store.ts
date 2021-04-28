import { combineReducers, createStore } from "redux";
import AuthState, { authReducer } from "./AuthState";
import { employeesReducer } from "./EmployeeState";

const reducers = combineReducers({
authState:authReducer,  employeesState: employeesReducer});
const store = createStore(reducers);

export default store;
