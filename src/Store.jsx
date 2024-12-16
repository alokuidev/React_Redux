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

export const store = createStore(taskReducer)
//console.log(store);



console.log(store.getState())
store.dispatch(addTask('Alok Singh'))
store.dispatch(addTask('Amar Singh'))
console.log(store.getState())
store.dispatch(deleteTask(1))
console.log(store.getState())
function addTask(data){
    return {type: ADD_TASK, payload:data}
}
function deleteTask(data){
    return {type: DELETE_TASK, payload:data}
}