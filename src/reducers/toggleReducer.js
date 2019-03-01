import { ADD_LIST } from "../actions/constants";


const initialState=[]

export const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}