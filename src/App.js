import { useState } from "react";
import './App.css';
const whatTodo=[
  {
    id:0,
    name: "Learn Js",
    priority:1
  },
  {
    id:1,
    name: "Learn Angular",
    priority:3
  },
  {
    id:2,
    name: "Learn React",
    priority:2
  }
]

function App() {
  const [todos,setTodos]= useState(whatTodo);
  const [todo, settodo] = useState({
    tname:"",
    priority:""
  });

  function handleChange(e){
    const value=e.target.value;

    settodo({
      ...todo,
      [e.target.name]: value,
      [e.target.pri]:value

    })

    console.log(todo)
  
  }
  function handleSubmit(e){
  
  }

  return (
    <div className="App">
      <div className="form">
        <h1>Add your todo list</h1>
         <form onSubmit={handleSubmit}>
           <input name="tname" type="text" value={todo.tname} onChange={handleChange}/>
           <input name="pri" type="text" value={todo.priority} onChange={handleChange}/>
           <button type="submit">Add todo</button>
         </form>
      </div>
      <div className="content">
       {/* {todos.map((doc)=>{
           return(
             
               <p key={doc.id}>{doc.name} and priority of {doc.priority}</p>
             
           )
       })} */}
      </div>
    </div>
  );
}

export default App;
