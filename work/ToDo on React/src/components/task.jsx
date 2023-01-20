
export function Task({ nameTask, deleteTask, status, changeStatus }) {
    return(
        <div className={`todo__task + ${status ? "done" : ""}`}>
                <div className="todo__task-content">
                    <label  className="todo__task-text">
                        <input className="todo__task-checkbox" type="checkbox" onClick={() => changeStatus(nameTask)} defaultChecked={status}/>
                        <span className="todo__name">
                            {nameTask}
                        </span>
                    </label>
                </div>
                <button className="todo__icon-delete" onClick={() => deleteTask(nameTask)}>+</button>
        </div>
    )
}