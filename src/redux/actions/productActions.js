import axiosApi from "../../api/items";
import { ActionTypes } from "../constants/actionTypes";

export const fetchUniversities = (searchText,offset,limit) => {

    return async (dispatch, getState) => {
        if(searchText === ``){
            const response = await axiosApi.get(`/search?country=United+States&offset=${offset}&limit=${limit}`)
            dispatch({ type: ActionTypes.GET_UNIVERSITIES, payload: response.data })
        }else{
            const response = await axiosApi.get(`/search?country=United+States&name=${searchText}&offset=${offset}&limit=${limit}`)
            dispatch({ type: ActionTypes.GET_UNIVERSITIES, payload: response.data })
        }
    }

};
export const SearchData = (searchText, callback) => {

    return async (dispatch, getState) => {
        const response = await axiosApi.get(`/search?country=United+States&name=${searchText}`)
        dispatch({ type: ActionTypes.GET_UNIVERSITIES, payload: response.data })
        callback({data:response.data , searchText})
    }

};