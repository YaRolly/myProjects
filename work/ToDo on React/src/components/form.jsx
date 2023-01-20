import { STATUS } from "./const";
import {  useState } from "react";

export function Form({ priority, list, addTask }) {
    const [ name, setName ] = useState('');

    function handleChange(event) {
        setName(event.target.value);
    };

    function changeSubmit(priority, list, name) {
        if (!name.trim()) return;
        const task = { name: name, status: STATUS.TO_DO, priority: priority};
        addTask(task);
    }

    return(
        <form className="todo__add" onSubmit={() => changeSubmit(priority, list, name)}>
                <input type="text" className="todo__add-input" placeholder="Добавить важные дела" onChange={handleChange} value={name} />
                <button type="submit" className="todo__add-btn">+</button>
        </form>
    )
}