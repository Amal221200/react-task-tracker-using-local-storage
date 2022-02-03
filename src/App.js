// import React from 'react';
import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setshowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 3 2022',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 4 2022',
      reminder: true
    },
    {
      id: 3,
      text: 'Shopping',
      day: 'Feb 5 2022',
      reminder: false
    }
  ])

  // Add Task

  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id , ...task};
    setTasks([...tasks, newTask]);
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  let deleteTask = (id) => {
    // console.log('deleting', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header displayForm={() => setshowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}  />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to show'}
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return (
//       <>
//       <Header/>
//       Hello There
//       </>
//     )
//   }
// }

export default App;
