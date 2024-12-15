/* eslint-disable no-case-declarations */
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