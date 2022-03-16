import "./Todo.css";

const Todo = ({ inputtext, changeText, todos, addTask }) => {
  // const handleclick = () => {};

  return (
    <div className="todo">
      <div className="inputs">
        <h3>Tasks Manager</h3>
        <div className="inputbtn">
          <input
            type="text"
            placeholder="Enter a task here"
            onChange={e => changeText(e)}
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

export default Todo;
