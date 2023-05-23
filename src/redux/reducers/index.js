import { combineReducers } from "redux";
import { medsReducer} from "./medsReducer";


const reducers = combineReducers({
    Data:medsReducer,
});

export default reducers