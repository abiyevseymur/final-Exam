import { ADD_LIST, CHECKED } from "../actions/constants";


let id = 0
export const listReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_LIST:  
        return[{ 
            id:id++, 
            lists: action.payload,
            checked:false},
            ...state]
        case CHECKED:
        return state.map(s =>{
            if(s.id === action.payload){
                s.checked=!s.checked;
            }
            return s;
        })
        default:
            return state
    }
}