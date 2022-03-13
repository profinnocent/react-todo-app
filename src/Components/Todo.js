import React from "react";

const Todo = () => {
  return (
    <div className="inputs">
      <h3>Tasks</h3>
      <div className="addbtn">
        <input type="text" />
        <button>
          Add Task <i className="fa fa-circle-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
