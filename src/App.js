import React from 'react';
import './App.css';
import {useState} from 'react'

function App() {
  const [toDos,setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const addTodo=()=>{
    setToDos([...toDos,{id:Date.now(),text:toDo, status:false}])
  
  }
  const clearTodo=()=>{
    setToDo(()=> "")
  
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>It's Todo time</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} className="typehHere" type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{addTodo();clearTodo();}}  className="fas fa-plus"></i>
      </div>
      <div className="todos">
      
      { toDos.map((obj)=>{
        return(
        <div className="todo">
        <div className="left">
        <input onChange={(e)=>{
          console.log(e.target.checked)
          console.log(obj)
          setToDos(toDos.filter(obj2=>
            {
              if (obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }
          ))
        }
        } value={obj.status} type="checkbox" name="" id="" />
        <p>{obj.text}</p>
        </div>
        <div className="right">
        <i onClick={()=>{setToDos(toDos.filter(obj2=>
          {
            if (obj2.id===obj.id){
              obj2 = null
            }
            return obj2
          }
          ))}} className="fas fa-times"></i>
        </div>
        
        </div>)
      }

      )
        }
        <h2>Completed Task</h2>
{
  toDos.map((obj)=>{
    
      
      if(obj.status){return(<div className="todos">
      <div className="todo">
      
        <p>{obj.text}</p>
        
       
        </div>
        </div>
      )
      }
      
    return null
  }
  )
}
      </div>
    </div>
  );
}

export default App;