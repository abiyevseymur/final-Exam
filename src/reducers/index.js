import { combineReducers } from 'redux'
import { listReducer } from './../reducers/addList';
import {toggleReducer} from './../reducers/toggleReducer'


export const rootReducer = combineReducers({
    lists: listReducer,
    toggle:toggleReducer
})