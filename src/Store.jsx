/* eslint-disable no-case-declarations */

import { createStore } from "redux";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const initaiState = {
    task:[]
}

const taskReducer = (state = initaiState, action) =>{
    switch (action.type) {
        case ADD_TASK:
            
            return {
                ...state,
                task:[...state.task,action.payload]
            }
            case DELETE_TASK:
            const updateTask = state.task.filter((currTask, index) =>{
                return index != action.payload;
            })
            return {
                ...state,
                task:updateTask
            }
    
        default:
            return state;
    }
}

const store = createStore(taskReducer)
//console.log(store);
console.log(store.getState())
store.dispatch({type: ADD_TASK, payload:'Alok Singh'})
store.dispatch({type: ADD_TASK, payload:'Amar Singh'})
console.log(store.getState())
store.dispatch({type: DELETE_TASK, payload:1})
console.log(store.getState())