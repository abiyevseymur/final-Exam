import { ADD_LIST } from "../actions/constants";


const initialState=[]
export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST:
             return [
                ...state,
                action.payload,
             ]
        default:
            return state
    }
}