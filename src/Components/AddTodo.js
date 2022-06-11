import "./AddTodo.css";

const AddTodo = ({ inputtext, changeText, addTask, handleKeyup }) => {

  return (
    <div className="todo">
      <div className="inputs">
        <h3>Tasks Manager</h3>
        <div className="inputbtn" onKeyUpCapture={handleKeyup}>
          <input
            type="text"
            placeholder="Enter a task here"
            onChange={changeText}
            value={inputtext}
          />
          <button onClick={addTask}>
            Add Task <i className="fa fa-circle-plus"></i>
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default AddTodo;
