import { useState } from "react";
import './App.css';
const whatTodo=[
  {
    id:0,
    tname: "Learn JavaSceipt",
    priority:1
  },
  {
    id:1,
    tname: "Learn Angular",
    priority:3
  },
  {
    id:2,
    tname: "Learn React",
    priority:2
  }
]

function App() {
  const [todos,setTodos]= useState(whatTodo);
  const [todo, settodo] = useState({
    id:"0",
    tname:"",
    priority:0
  });

  function handleChange(e){
    const value=e.target.value;

    settodo({
      ...todo,
      [e.target.name]: value,
      [e.target.name]: value
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    const {tname, priority}=todo;
    const tdo={
      id: todos.length + 1,
      tname: tname,
      priority: priority

    }
    console.log("tdo created"+tdo);
    setTodos(todos.concat(tdo));
    console.log(todos)
  
  }

  return (
    <div className="App">
      <div className="form">
        <h1>Todo List</h1>
         <form onSubmit={handleSubmit}>
           <label htmlFor="tname">What to do:</label>
           <input name="tname" type="text" value={todo.tname} onChange={handleChange}/>
           <label htmlFor="priority">Priority:</label>
           <input name="priority" type="text" value={todo.priority} onChange={handleChange}/>
           <button type="submit">todo +</button>
         </form>
      </div>
      <div className="content">
       {todos.map((my_dos)=>{
         return(
           <div className="todolist">
             <p>{my_dos.tname} </p>
             <span>{my_dos.priority}</span>
           </div>
         )
       })}
      </div>
    </div>
  );
}

export default App;
