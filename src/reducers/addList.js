import { ADD_LIST } from "../actions/constants";


const initialState=[]
let id=0;
export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST:
            //  action.payload.id = ++id
             return [
                ...state,
                action.payload,
            ]
        default:
            return state
    }
}