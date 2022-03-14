import './Todolist.css'

const Todolist = ({todos}) => {
  return (
      <div className="todos">
        <h3>Todo List</h3>
        <ul>
          {/* <li>
            <div className="li-img">
              <i className="fa fa-clipboard-list"></i>
            </div>
            <div className="content">
              <h4>
                Go and watch movie at shoprite and go to a busary the rhg dbfer
                hjgh ityh.
              </h4>
              <span>2-2-22 : 08:15am </span>
              <span> 3-2-22 10:30pm</span>
            </div>
            <div className="btns">
              <button>Delete</button>
              <button> -Edit- </button>
            </div>
            <input type="checkbox" name="status" id="status" />
          </li> */}


          {todos.map((todo) => 
             <li key={todo.text + Math.floor(Math.random()*10000)}>
             <div className="li-img">
               <i className="fa fa-clipboard-list"></i>
             </div>
             <div className="content">
               <h4>
                 {todo.text}
               </h4>
               <span>{todo.time} </span>
               <span> 3-2-22 10:30pm</span>
             </div>
             <div className="btns">
               <button>Delete</button>
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
