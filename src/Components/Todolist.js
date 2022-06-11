import './Todolist.css';

const Todolist = ({todos, delTask, toggleCompleted, editTask}) => {
  // console.log("Before display " + todos);
 // alert("Before display " + todos)


  return (
      <div className="todos">
        <h3>Todo List</h3>
        <ul>
          {
          todos.map((todo, index) => 
             <li key={index}>
             <div className="li-img">
               <i className="fa fa-clipboard-list"></i>
             </div>
             <div className="content">
               <h4>
                 {todo.text}
               </h4>
               <span><i className="fa-regular fa-clock"></i> </span>
              <span>{todo.time}</span>
             </div>
             <div className="btns">
               <button onClick={() => delTask(todo.id)}>Delete</button>
               <button onClick={() => editTask(todo.id)}>Update</button>
             </div>
             <input type="checkbox"
            // value={false}
            name="chkbox"
             onChange={() => toggleCompleted(todo.id)}
             checked={todo.isCompleted}/>
           </li>
          )
          }
        </ul> 
       
      </div>
  )
}

export default Todolist;
