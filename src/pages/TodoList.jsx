
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, editDataSave, completeTask, uncompleteTask } from "../components/todoSlice";
import { useState } from "react";

const App=()=>{
 const Data= useSelector((state)=>state.todo.task);
 const dispatch= useDispatch();
 const [val, setVal]=useState("");
 const [btnStatus, setBtnStatus]=useState(true);
 const [id, setid]= useState("");


 console.log(Data);
  const handleSubmit=()=>{
    dispatch(addTask({id:Date.now(), task:val, status:"uncomplete"}))
  }

  const delTask=(id)=>{
    dispatch(deleteTask({id:id}))
  }

  const editTask=(id, task)=>{
    setBtnStatus(false);
    setVal(task)
    setid(id)
  }

  const editSave=()=>{
    dispatch(editDataSave({id:id, task:val}));
    setBtnStatus(true);
  }

  const taskComp=(id)=>{
       dispatch(completeTask({id:id}))
       setBtnComp(false);

  } 

  const taskUncomplete=(id)=>{
    dispatch(uncompleteTask({id:id}))
    setBtnComp(true);
  }



let sn=0;
const ans=Data.map((key)=>{
  sn++;
  return(
    <>
      <tr style={{textAlign:"center"}}>
        <td> {sn} </td>
        <td>
          
          {key.status=="complete"? (<span style={{color:'red',  textDecoration:'line-through' }}>{key.task}</span>) : (key.task)}
           
           </td>
        <td>  <button onClick={()=>{delTask(key.id)}}> Delete </button> </td>
        <td> 
          <button onClick={()=>{editTask(key.id, key.task)}}> Edit</button>
        </td>
        <td>

              {key.status=="uncomplete"?(
                <>
                <button onClick={()=>{taskComp(key.id)}}> Complete </button>
                </>
              ):(
                <>
                <button onClick={()=>{taskUncomplete(key.id)}}>Uncomplete</button>  
                </>
              )}
               </td>
      </tr>
    </>
  )
})

  return(
    <>
        <center>
      <h1> To Do App</h1>
      <hr />
      Enter Task : <input type="text" value={val} 
      onChange={(e)=>{setVal(e.target.value)}} />
        {btnStatus?  <button onClick={handleSubmit} >Add</button> : 
        <button onClick={()=>{editSave()}}>Edit save</button>}
      <hr size="1" color="red" />
      <table border={2} width="100%" >
        <tr>
          <th> Sno</th>
          <th>task </th>
          <th>Delete Task</th>
          <th>Edit Task</th>
          <th>Task Done / No </th>
        </tr>
        {ans}
      </table>
      </center>
    </>
  )
}
export default App;