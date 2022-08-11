import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'
import { useState } from 'react';

const ListTask = () => {
    const todos = useSelector((state) =>state.todos);
    const [search, setSearch] = useState("")

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
    <input type="text" placeholder="search" onChange={(e)=>setSearch(e.target.value)}></input>

			{todos.map((todo) => (
				<Task id={todo.id} title={todo.title}  done={todo.done} />
			))}
		</ul>
 
    </>
  )
};


export default ListTask