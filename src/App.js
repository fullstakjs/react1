import { useState } from "react";
import './App.css';
const whatTodo=[
  {
    id:0,
    name: "Learn Js",
    priority:1
  },
  {
    id:0,
    name: "Learn Angular",
    priority:3
  },
  {
    id:0,
    name: "Learn React",
    priority:2
  }
]

function App() {
  const [todos,setTodos]= useState(whatTodo);
  const [todo, settodo] = useState("");

  return (
    <div className="App">
      <div className="form">
        <h1>Add your todo list</h1>
         <form >
           <input type="text"/>
           <input type="text"/>
           <button type="submit">Add todo</button>
         </form>
      </div>
      <div className="content">
       {todos.map((doc)=>{
           return(
             
               <p key={doc.id}>{doc.name} and priority of {doc.priority}</p>
             
           )
       })}
      </div>
    </div>
  );
}

export default App;
