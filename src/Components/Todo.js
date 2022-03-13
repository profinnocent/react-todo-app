import React from "react";
import "./Todo.css";

const Todo = () => {
  return (
    <div className="todo">
      <div className="inputs">
        <h3>Tasks Manager</h3>
        <div className="inputbtn">
          <input type="text" placeholder="Enter a task here"/>
          <button>
            Add Task <i className="fa fa-circle-plus"></i>
          </button>
        </div>
      </div>

      <div className="todos">
        <h3>Todo List</h3>
        <ul>
          <li>
            <div className="li-img">
              <i className="fa fa-clipboard-list"></i>
            </div>
            <div className="content">
              <h4>Go and watch movie at shoprite and go to a busary the rhg dbfer hjgh ityh.</h4>
              <span>2-2-22 : 08:15am </span>
              <span> 3-2-22 10:30pm</span>
            </div>
            <div className="btns">
              <button>Delete</button>
              <button> -Edit- </button>
            </div>
            <input type="checkbox" name="status" id="status" />
          </li>
          <li>
            <div className="li-img">
              <i className="fa fa-clipboard-list"></i>
            </div>
            <div className="content">
              <h4>Go and watch movie at shoprite</h4>
              <span>2-2-22 : 08:15am </span>
              <span> 3-2-22 10:30pm</span>
            </div>
            <div className="btns">
              <button>Delete</button>
              <button>Edit</button>
              <input type="checkbox" name="status" id="status" />
            </div>
          </li>
          <li>
            <div className="li-img">
              <i className="fa fa-clipboard-list"></i>
            </div>
            <div className="content">
              <h4>Go and watch movie at shoprite</h4>
              <span>2-2-22 : 08:15am </span>
              <span> 3-2-22 10:30pm</span>
            </div>
            <div className="btns">
              <button>Delete</button>
              <button>Edit</button>
              <input type="checkbox" name="status" id="status" />
            </div>
          </li>
          <li>
            <div className="li-img">
              <i className="fa fa-clipboard-list"></i>
            </div>
            <div className="content">
              <h4>Go and watch movie at shoprite</h4>
              <span>2-2-22 : 08:15am </span>
              <span> 3-2-22 10:30pm</span>
            </div>
            <div className="btns">
              <button>Delete</button>
              <button>Edit</button>
              <input type="checkbox" name="status" id="status" />
            </div>
          </li>
          <li>
            <div className="li-img">
              <i className="fa fa-clipboard-list"></i>
            </div>
            <div className="content">
              <h4>Go and watch movie at shoprite</h4>
              <span>2-2-22 : 08:15am </span>
              <span> 3-2-22 10:30pm</span>
            </div>
            <div className="btns">
              <button>Delete</button>
              <button>Edit</button>
              <input type="checkbox" name="status" id="status" />
            </div>
          </li>
          <li>
            <div className="li-img">
              <i className="fa fa-clipboard-list"></i>
            </div>
            <div className="content">
              <h4>Go and watch movie at shoprite</h4>
              <span>2-2-22 : 08:15am </span>
              <span> 3-2-22 10:30pm</span>
            </div>
            <div className="btns">
              <button>Delete</button>
              <button>Edit</button>
              <input type="checkbox" name="status" id="status" />
            </div>
          </li>
          <li>
            <div className="li-img">
              <i className="fa fa-clipboard-list"></i>
            </div>
            <div className="content">
              <h4>Go and watch movie at shoprite</h4>
              <span>2-2-22 : 08:15am </span>
              <span> 3-2-22 10:30pm</span>
            </div>
            <div className="btns">
              <button>Delete</button>
              <button>Edit</button>
              <input type="checkbox" name="status" id="status" />
            </div>
          </li>
          <li>
            <div className="li-img">
              <i className="fa fa-clipboard-list"></i>
            </div>
            <div className="content">
              <h4>Go and watch movie at shoprite</h4>
              <span>2-2-22 : 08:15am </span>
              <span> 3-2-22 10:30pm</span>
            </div>
            <div className="btns">
              <button>Delete</button>
              <button>Edit</button>
              <input type="checkbox" name="status" id="status" />
            </div>
          </li>
          <li>
            <div className="li-img">
              <i className="fa fa-clipboard-list"></i>
            </div>
            <div className="content">
              <h4>Go and watch movie at shoprite</h4>
              <span>2-2-22 : 08:15am </span>
              <span> 3-2-22 10:30pm</span>
            </div>
            <div className="btns">
              <button>Delete</button>
              <button>Edit</button>
              <input type="checkbox" name="status" id="status" />
            </div>
          </li>
          <li>
            <div className="li-img">
              <i className="fa fa-clipboard-list"></i>
            </div>
            <div className="content">
              <h4>Go and watch movie at shoprite</h4>
              <span>2-2-22 : 08:15am </span>
              <span> 3-2-22 10:30pm</span>
            </div>
            <div className="btns">
              <button>Delete</button>
              <button>Edit</button>
              <input type="checkbox" name="status" id="status" />
            </div>
          </li>
          <li>
            <div className="li-img">
              <i className="fa fa-clipboard-list"></i>
            </div>
            <div className="content">
              <h4>Go and watch movie at shoprite</h4>
              <span>2-2-22 : 08:15am </span>
              <span> 3-2-22 10:30pm</span>
            </div>
            <div className="btns">
              <button>Delete</button>
              <button>Edit</button>
              <input type="checkbox" name="status" id="status" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
