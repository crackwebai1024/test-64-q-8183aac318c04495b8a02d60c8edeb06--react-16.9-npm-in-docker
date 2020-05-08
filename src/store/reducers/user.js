import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    data: [],
    add:false,
}

const gettabledata = (state, action) => {
    debugger
    state = updateObject(state, {    
        data: action.data
    })
    debugger
    return state;
}

const addsuccess = (state, action) => {
    debugger
    state = updateObject(state, {    
        add: true 
    })
    debugger
    return state;
}

const reducer = (state = initialState, action) => {
    var oldstate = state;
    state = initialState;
    switch (action.type) {
        case actionTypes.GET_TABLE:
            return gettabledata(state, action);
        case actionTypes.ADD_SUCCESS:
            return addsuccess(state, action);
        default:
            return initialState;
    }
};

export default reducer;