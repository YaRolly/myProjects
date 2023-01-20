import { Form } from "./form";
import { Tasks } from "./taskslist";
import { useEffect, useState } from "react";

export function Priority({ priority, className}) {
    const [ tasks, setTasks ] = useState([]);

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        if (tasks) {
            setTasks(tasks);
    }}, [])

    function addTask(task) {
        const tasksList = [task, ...tasks];
        setTasks(tasksList);
        localStorage.setItem("tasks", JSON.stringify(tasksList));
    };

    function deleteTask(name) {
        const tasksList = tasks.filter((item) => item.name !== name);
        setTasks(tasksList);
        localStorage.setItem("tasks", JSON.stringify(tasksList));
    };

    function changeStatus(name) {
        const tasksList = tasks.map((task) => {
            if (task.name === name) {
                task.status = !task.status;
            }
            return task;
        });
        setTasks(tasksList);
        localStorage.setItem("tasks", JSON.stringify(tasksList));
    }

    return (
        <div className={className}>
            <div className="todo__title">
                <h1>{priority}</h1>
            </div>
            <Form priority={priority} list={tasks} addTask={addTask}  />
            <Tasks priority={priority} list={tasks} setTasks={setTasks} deleteTask={deleteTask} changeStatus={changeStatus} />
        </div>
    )
}