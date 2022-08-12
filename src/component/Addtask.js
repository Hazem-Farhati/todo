import  { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addTodo } from '../redux/todoSlice';
import { FcPlus } from "react-icons/fc";
import '../styles/addtask.css'
const Addtask = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState({ });   
      
  const handleAdd =() => {dispatch(addTodo(task))}
  return (
    <>
    <div>
        <input className='inptitle' type='text' placeholder='Add ur task' onChange={(e) => {
        setTask({ title:e.target.value});
      }}/>
     <button onClick={handleAdd}><FcPlus className='add' /> </button>
     </div>

            
    </>
  )
}

export default Addtask