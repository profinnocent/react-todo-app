import "./App.css";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import React, { useState } from "react";
import Todolist from "./Components/Todolist";

function App() {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState([0, 0]);
  const [inputtext, setInputText] = useState("");

  //console.log(todos);

  //Add New task function
  const addTask = () => {
    setTodos([{text: inputtext,time: new Date().getTime() }, ...todos])
    setInputText("")
    setData([...data])
  }

  return (
    <div className="App">
      <Header dataH={data} todosH={todos} />
      <Todo
        inputT={inputtext}
        changeText={(e) => setInputText(e.target.value)}
        todosT={todos}
        addTask={addTask}
      />
      <Todolist todos={todos}/>
    </div>
  );
}

export default App;
