import * as actionTypes from "./actionTypes";
import axios from "axios";

export const gettableresult = (data) => {
    debugger
    return{
        type: actionTypes.GET_TABLE,
        data: data
    }
}

export const GetTable = () =>{
    debugger
    let url = "http://18.209.209.196:4059/api/leads/?location_string=India"
    return dispatch => {
        axios.
        get(url)
        .then(res=>{
            dispatch(gettableresult(res.data))
            debugger
        })
        .catch(err=>{
            debugger
        })
    }
}

export const Add_Lead = (body) =>{
    debugger
    let url = "http://18.209.209.196:4059/api/leads/"
    return dispatch => {
        axios.
        post(url, body)
        .then(res=>{
            dispatch(gettableresult(res.data))
            debugger
        })
        .catch(err=>{
            debugger
        })
    }
}