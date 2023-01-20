import { Task } from "./task";

export function Tasks({ priority, list, deleteTask, changeStatus }) {
    const listTasks = list.filter((task) => task.priority === priority);
    
    return(
        <div className="tasks">
            {listTasks.map((task) => (
                <Task nameTask={task.name} key={Math.random()} deleteTask={deleteTask} status={task.status} changeStatus={changeStatus} />
                ))}
        </div>
    )
}

