import './Todolist.css'

const Todolist = ({todos, delTask}) => {


  return (
      <div className="todos">
        <h3>Todo List</h3>
        <ul>
          {todos.map((todo) => 
             <li key={todo.text + Math.floor(Math.random()*10000)}>
             <div className="li-img">
               <i className="fa fa-clipboard-list"></i>
             </div>
             <div className="content">
               <h4>
                 {todo.text}
               </h4>
               <span><i className="fa-solid fa-alarm-clock"></i> </span>
              <span>{todo.time}</span>
             </div>
             <div className="btns">
               <button onClick={() => delTask(todo.text)}>Delete</button>
               <button> -Edit- </button>
             </div>
             <input type="checkbox" name="status" id="status" />
           </li>
          )}
        </ul>
      </div>
  )
}

export default Todolist
