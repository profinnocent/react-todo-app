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
    setInputText("")
    setData(data)
  }

  //Delete a Task
  const delTask = (id) => {
    setTodos([...todos].filter(td => td.id !== id))
  }  

  //Toggle Completed button
const toggleCompleted = (id) => {
  const newTodos = [...todos].map((todo) => {
    if(todo.id === id){
      todo.isCompleted = !todo.isCompleted
    }
    return todo
  })

  setTodos([newTodos])
}


  console.log(todos)

  return (
    <div className="App">
      <Header 
      data={data} todos={todos} 
      />
      <Todo
        inputtext={inputtext}
        changeText={(e) => setInputText(e.target.value)}
        todos={todos}
        addTask={addTask}
      />
      <Todolist 
      todos={todos}
      delTask={(tdid) => delTask(tdid)}
      toggleCompleted={(todoid) => toggleCompleted(todoid)}
      />
    </div>
  );
}

export default App;
