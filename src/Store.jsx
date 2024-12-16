/* eslint-disable no-case-declarations */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk";
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = "task/fetch";

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
            case FETCH_TASK:
            return{
                ...state,
                task:[...state.task, ...action.payload]
            }
        default:
            return state;
    }
}

export const store = createStore(taskReducer, composeWithDevTools(applyMiddleware(thunk)))
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

export const fetchTask = () =>{
    return async (dispatch) =>{
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
            const task = await res.json();
            console.log(task);
            dispatch({type: FETCH_TASK, payload:task.map((currTask) => currTask.title)})
        } catch (error) {
            console.log(error)
        }
    }
}