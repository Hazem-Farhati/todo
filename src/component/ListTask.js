import React from 'react'
import Task from './Task'
import { useDispatch, useSelector } from 'react-redux'
import { addFilter } from '../redux/filterSlice';
import '../styles/listTask.css'

const ListTask = () => {
  const dispatch = useDispatch()
    const todos = useSelector((state) =>state.todos);
    const filter = useSelector((state) =>state.filter);
    // const [filter, setFilter] = useState("all")
    // const todos=[
    //     { id:1 ,title:'todo1' ,done:false},
    //     { id:2 ,title:'todo2' ,done:false},
    //     { id:3 ,title:'todo3' ,done:true},
    //     { id:4 ,title:'todo4' ,done:false},
    //     { id:5 ,title:'todo5' ,done:true},
    //     { id:6 ,title:'todo6' ,done:false}
    // ]
  return (
    <>
    <ul >
    <div className='select'>
    <select  onChange={(e)=>dispatch(addFilter(e.target.value))}>
                <option value="All">All</option>
                <option value="Done">Done</option>
                <option value="Not Done">not Done</option>
            </select>
            </div>
			{todos.filter(el=> filter=="All" ? el : filter=='Done' ? el.done==true: el.done==false).map((todo) => (
				<Task id={todo.id} title={todo.title}  done={todo.done} />
			))}
		</ul>
 
    </>
  )
};


export default ListTask