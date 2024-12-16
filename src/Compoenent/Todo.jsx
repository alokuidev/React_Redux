export const Todo = () => {
  return (
    <>
      <div className="container">
        <div className="todo-card">
          <h2 className="title">To-do List:</h2>
          <div className="input-container">
            <input type="text" id="task-input" placeholder="Add a new task" />
            <button className="add-btn">Add Task</button>
          </div>
          <ul className="task-list">
            <li>
              <span>0 : Buy Apple</span>
              <button className="delete-btn">🗑</button>
            </li>
            <li>
              <span>1 : Buy kuchbhi</span>
              <button className="delete-btn">🗑</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
