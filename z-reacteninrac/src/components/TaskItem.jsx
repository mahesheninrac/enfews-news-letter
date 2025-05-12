function TaskItem({ task, deleteTask }) {
    return <li className="">
        <div className="card-item">
            <p className="description">{task.title}</p>
            <button onClick={() => deleteTask(task.id)}>delete</button>
        </div>
    </li>
}

export default TaskItem