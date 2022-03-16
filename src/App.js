import "./App.css";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import React, { useState } from "react"
import Todolist from "./Components/Todolist"

function App() {
  const [todos, setTodos] = useState([])
  const [data, setData] = useState(0)
  let [inputtext, setInputText] = useState("")

  //Add New task function
  const addTask = () => {
    setTodos([{id: Math.floor(Math.random()*100000), text: inputtext, time: new Date().toLocaleTimeString(), isCompleted: false }, ...todos])
    setInputText("abc")
    setData(data)
  }

  //Delete a Task
  const delTask = (text) => {
    setTodos(todos.filter(td => td.text !== text))
  }  

  //Toggle Complete button



  console.log(todos)

  return (
    <div className="App">
      <Header 
      data={data} todos={todos} 
      />
      <Todo
        value={inputtext}
        changeText={(e) => setInputText(e.target.value)}
        todos={todos}
        addTask={addTask}
      />
      <Todolist 
      todos={todos}
      delTask={(text) => delTask(text)}
      />
    </div>
  );
}

export default App;
