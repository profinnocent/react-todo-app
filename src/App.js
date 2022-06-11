import "./App.css";
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import React, { useState } from "react";
import Todolist from "./Components/Todolist";

function App() {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState(0);
  const [inputtext, setInputText] = useState("");
  //const [checkState, setCheckState] = useState([]);
  const [tdIndex, setTdIndex] = useState(0);

console.log(todos)
  //Add New task function
  const addTask = () => {
    // console.log("Before pushing" + todos);

    if (inputtext !== "") {
      //setIsCompleted([...isCompleted, false]);

      setTodos(
        [
        ...todos,
        {
          id: tdIndex,
          text: inputtext,
          time: new Date().toLocaleTimeString(),
          isCompleted: false,
        }
      ]
      );
      setInputText("");
      setTdIndex(c => c + 1);

      //alert(tdIndex);
      // console.log("After pushing" + todos);

    } else {

      alert("Please enter a task");

    }
  };


  //Delete a Task
  const delTask = (id) => {
    setTodos(todos.filter((td) => td.id !== id));
  };


  //Edit Todo task
  const editTasK = (id) => {
  //   alert(btntext);
  //   if(btntext === "Edit"){
  //   alert('Update btn clicked' + id);
  //   let theTodo = todos.filter((td) => td.id === id);
  //   console.log(theTodo);
  //   setInputText(theTodo[0].text);
  //   btntext = "Save"
  //   }else{
  //     alert(btntext);
  //     //setbtntext("Edit")
  //   }
  // }

    if (inputtext === "") {
      alert(
        "Type the new task in the input box and press UPDATE button of the Task you want to change"
      );
    } else {
      setTodos(
        [...todos].map((todo) =>
          todo.id === id ? { ...todo, text: inputtext } : todo
        )
      );
      setInputText("");
    }
  }

  //Toggle Completed button
  const toggleCompleted = (id) => {

    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
      )
    );

    //Count completed task
    setData(0);
    [...todos].map(todo => todo.isCompleted === true  ? setData(c => c - 1)  : setData(c => c + 1));

  };

  // console.log(todos);

  return (
    <div className="App">
      <Header data={data} todos={todos} />
      <AddTodo
        inputtext={inputtext}
        changeText={(e) => setInputText(e.target.value)}
        addTask={addTask}
      />
      <Todolist
        todos={todos}
        delTask={(tdid) => delTask(tdid)}
        toggleCompleted={(idt) => toggleCompleted(idt)}
        //isCompleted={isCompleted}
        editTask={(id) => editTasK(id)}
        tdIndex={tdIndex}
      />
    </div>
  );
}

export default App;
