// import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  const [showAddTask, setshowAddTask] = useState(false);
  
  // Fetching tasks 
  let initTask;
  if(localStorage.getItem('tasks') === null){
    initTask = [];
  }else{
    initTask = JSON.parse(localStorage.getItem('tasks'));
  }

  const [tasks, setTasks] = useState(initTask);

  // Add Task
  const addTask = async (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id , ...task};
    setTasks([...tasks, newTask]);
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
  
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  let deleteTask =async (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  return (
    <Router>
      <div className="container">
    
          {/* <Route path="/" element={()} /> */}
          <Header displayForm={() => setshowAddTask(!showAddTask)} showAdd={showAddTask} />
          
          <Route path='/' exact render={(props)=>(
            <>
              {showAddTask && <AddTask onAdd={addTask}  />}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to show'}
            </>
          )} />
          <Route path='/about' exact component={About} />
          <Footer/>
      
      </div>
    </Router>
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
