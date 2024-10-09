import React, { useState, useEffect } from "react";
import './App.css'
import { getData, postData } from "./API/axios";

export default ToDoList;
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [refresh, setRefresh] = useState(false);
  //const [taskState, setTaskState] = useState()

  useEffect(() => {
    getData().then((response) => {
      const data = response.reverse();
      const titles = data.map(item => item.title);
      //console.log(titles);
      setTasks(titles);
      setRefresh(false);
    })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [refresh]);

  function addTask() {

    //It has to push in Databse 

    if (newTask !== '') {
      //setTasks(t => [newTask, ...t]);
      //console.log(newTask);
      postData(newTask);
      setNewTask('');
      setRefresh(true);
    }



  }


  function completeTask() { }


    function resetTask() { }

    function updateTask() {

    }

    function deleteTask(index) {
      const updateTasks = tasks.filter((task, i) => i !== index);
      setTasks(updateTasks);
    }


    return (
      <div>

        <div>
          <div className="container">
            <h1>To Do List</h1>
          </div>
          <div>
            <input className="input-text" type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button className="add-button" onClick={(e) => addTask(e)}> ➘</button>
          </div>

        </div>
        <div>
          <ul>
            {tasks.map((task, index) =>
              <li key={index}>
                <span className="text" >{task}</span>
                <button className="complete-Button" onClick={() => completeTask(index)}>complete</button>
                <button className="reset-Button" onClick={() => resetTask(index)}>reset</button>
                <button className="update-Button" onClick={() => updateTask(index)}>update</button>
                <button className="delete-Button" onClick={() => deleteTask(index)}>delete</button>

              </li>
            )}
          </ul>
        </div>

      </div>
    )

  }





