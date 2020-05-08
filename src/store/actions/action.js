import * as actionTypes from "./actionTypes";
import axios from "axios";

export const gettableresult = (data) => {
    debugger
    return{
        type: actionTypes.GET_TABLE,
        data: data
    }
}

export const addsuc = () => {
    debugger
    return{
        type: actionTypes.ADD_SUCCESS
    }
}

export const GetTable = () =>{
    debugger
    let url = "http://3.228.13.3:4000/api/leads/?location_string=India"
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
    let url = "http://3.228.13.3:4000/api/leads/"
    return dispatch => {
        axios.
        post(url, body)
        .then(res=>{
            debugger
            dispatch(addsuc())
            dispatch(GetTable())
            return true
            debugger
        })
        .catch(err=>{
            debugger
            return true
        })
    }
}

export const deletesuc = () => {
    debugger
    return{
        type: actionTypes.DELETE_SUCCESS
    }
}

export const Delete_Lead = (id) =>{
    debugger
    let url = "http://3.228.13.3:4000/api/leads/" + id
    return dispatch => {
        axios.
        delete(url)
        .then(res=>{
            debugger
            dispatch(deletesuc())
            dispatch(GetTable())
            return true
            debugger
        })
        .catch(err=>{
            debugger
            return true
        })
    }
}