import { ADD_LIST, CHECKED } from "./constants";

export const addList=(value)=>(

    {
        type:ADD_LIST,
        payload:value
    }
)

export const setToggle=(id)=>(
    {
        type:CHECKED,
        payload:id
    }
)
