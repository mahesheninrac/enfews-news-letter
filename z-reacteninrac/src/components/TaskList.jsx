import TaskItem from "./TaskItem"

function TaskList({ tasks, deleteTask }) {
    return <div className="">
        <ul>
            {
                tasks.map((task) => <TaskItem task={task} key={task.id} deleteTask={deleteTask} />)
            }
        </ul>
    </div>
}

export default TaskList