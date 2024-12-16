import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../Store";

export const Todo = () => {
  const [task, setTask] = useState("");
  const state = useSelector((state) => state);
  //console.log("state", state.task);
  const dispatch = useDispatch();
  const handleFormsubmit = (e) =>{
    e.preventDefault();
    
    dispatch(addTask(task))
    return setTask('')
  }
  const handleDelete = (id) =>{
  //console.log('del',id)
  return dispatch(deleteTask(id))
  }
  return (
    <form onSubmit={handleFormsubmit}>
      <div className="container">
        <div className="todo-card">
          <h2 className="title">To-do List:</h2>
          <div className="input-container">
            <input
              type="text"
              id="task-input"
              placeholder="Add a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="add-btn">Add Task</button>
          </div>
          <ul className="task-list">
            {state.task?.map((currElem, index) => (
                currElem?.trim() && ( 
              <li key={index}>
                <span>
                  {index + 1} : {currElem}
                </span>
                <button className="delete-btn" onClick={() => handleDelete(index)}>🗑</button>
              </li>)
            ))}
          </ul>
        </div>
      </div>
    </form>
  );
};
