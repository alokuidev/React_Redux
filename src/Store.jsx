/* eslint-disable no-case-declarations */
import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
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
                console.log(index,action.payload)
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

export const store = createStore(taskReducer, composeWithDevTools())
//console.log(store);



//console.log(store.getState())
//store.dispatch(addTask('Alok Singh'))
//store.dispatch(addTask('Amar Singh'))
//store.dispatch(addTask('Bowa Singh'))
//console.log(store.getState())
//store.dispatch(deleteTask(1))
//console.log(store.getState())
export function addTask(data){
    return {type: ADD_TASK, payload:data}
}
export function deleteTask(id){
    //console.log(id)
    return {type: DELETE_TASK, payload:id}
}