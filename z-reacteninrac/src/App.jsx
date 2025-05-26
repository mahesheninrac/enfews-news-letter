import React, { useEffect, useState } from 'react'
import withLoading from './hoc/withLoading'
import DataDisplay from './components/datafetch'
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Signup from './components/SignUp';

const EnhancedDataDisplay = withLoading(DataDisplay);
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState({});


  const addTaskHandler = (newTask) => {
    setTasks(prev => [...prev, newTask]);
  }
  const deleteTask = (id) => {
    const deleteItem = tasks.filter(item => item.id !== id)
    setTasks(deleteItem)
    alert("task deleted succesfully")
  }

  useEffect(() => {
    setTimeout(() => {
      setData({ name: "Test Data", description: 'Here is your awesome data fetched!' });
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    // <div className='container' >
    //   <div>
    //     <div className="">
    //       <img src="" alt="" />

    //     </div>
    //     <ul>
    //         <li className=''><a href="#"> Home</a></li>
    //         <li className=''><a href="#">  about</a></li>
    //         <li className=''><a href="#"> Contact</a></li>
    //         <li className=''><a href="#"> Services</a></li>
    //       </ul>
    //   </div>
    //   <AddTask addTaskHandler={addTaskHandler} tasks={tasks} />
    //   <TaskList tasks={tasks} isLoading={isLoading} deleteTask={deleteTask} />
    //   <h4>Eninrac Consulting we are marketing research </h4>
    //   <EnhancedDataDisplay data={data} isLoading={isLoading} />
    //   <div>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, incidunt.
    //     </p>
    //   </div>
    // </div>
    <div className="container">
      <Signup />
    </div>
  )
}

export default App