import  { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addTodo } from '../redux/todoSlice';

const Addtask = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState({
        id:Math.random(),
        title:"",
        details:"",
        Done:false,
      });   
      
  const handleAdd =() => {dispatch(addTodo(task))}
  return (
    <>
    <div >
        <input type='text' placeholder='Add ur task' onChange={(e) => {
        setTask({...task, title:e.target.value});
      }}/>

{/* <input  placeholder='Add ur details' onChange={(e) => {
        setTask({...task, details:e.target.value});
      }}/> */}
      
     <button onClick={handleAdd}> Add new task </button>

            </div>
    </>
  )
}

export default Addtask