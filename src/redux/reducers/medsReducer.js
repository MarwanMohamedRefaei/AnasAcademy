import { ActionTypes } from "../constants/actionTypes"


const initialState = {
    Universities: [],
};




export const medsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_UNIVERSITIES:
            return { ...state, Universities: action.payload };
        default:
            return state;
    }
}