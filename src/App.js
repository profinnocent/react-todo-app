import "./App.css";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import React, { useState } from "react";
import Todolist from "./Components/Todolist";

function App() {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState(0);
  let [inputtext, setInputText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  //Add New task function
  const addTask = () => {
    if (inputtext !== "") {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 100000),
          text: inputtext,
          time: new Date().toLocaleTimeString(),
          isCompleted: false,
        },
      ]);
      setInputText("");
      setData(data);
    } else {
      alert("Please enter a task");
    }
  };

  //Delete a Task
  const delTask = (id) => {
    setTodos([...todos].filter((td) => td.id !== id));
  };

  //Edit Todo task
  const editTasK = (ide) => {
    if (inputtext === "") {
      alert(
        "Type the new task in the input box and press EDIT button of the Task you want to change"
      );
    } else {
      setTodos(
        [...todos].map((todo) =>
          todo.id === ide ? { ...todo, text: inputtext } : todo
        )
      );
      setInputText("");
    }
  };

  //Toggle Completed button
  const toggleCompleted = (e, idt) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) =>
        todo.id === idt ? setIsCompleted(!isCompleted) : todo
      )
    );
  };

  console.log(todos);

  return (
    <div className="App">
      <Header data={data} todos={todos} />
      <Todo
        inputtext={inputtext}
        changeText={(e) => setInputText(e.target.value)}
        todos={todos}
        addTask={addTask}
      />
      <Todolist
        todos={todos}
        delTask={(tdid) => delTask(tdid)}
        toggleCompleted={(e) => toggleCompleted(e)}
        isCompleted={isCompleted}
        editTask={(teid) => editTasK(teid)}
      />
    </div>
  );
}

export default App;
