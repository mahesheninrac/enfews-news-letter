import React, { useState } from "react";

function AddTask({ addTaskHandler }) {
    const [taskTitle, setTaskTitle] = useState("")

    const addTask = () => {
        const newTask = {
            id: Date.now(),
            title: taskTitle
        }
        if (taskTitle.trim() === "") {
            alert("task field required")
        } else {
            addTaskHandler(newTask);
        }
        setTaskTitle("");
    }


    return <div>
        <h1>Your Daily Task</h1>
        <div className="task-form">
            <div className="form-group">
                <label htmlFor="todo">Add Task</label>
                <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} id="todo" className="form-control" />
            </div>
            <button onClick={addTask}>Add Task</button>
        </div>
    </div>
}

export default AddTask