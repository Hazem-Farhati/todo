import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { toggle, deletTodo, updateTodo } from '../redux/todoSlice'

const Task = ({ id, title, done }) => {
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch();
    const handleDone = () => {
        dispatch(
            toggle({ id: id, done: !done })
        );
    };

    const handleUpdate = () => {
        dispatch(
            updateTodo({ id: id, ...edit })
        );
    };
    const handleDelet = () => {
        dispatch(deletTodo({ id: id }));
    };
    return (
        <div>
            <button onClick={() => {setShow(false); handleUpdate() }}> done</button>         
            {show ? <><input type="text" defaultvalue={title}   onChange={(e)=>{setEdit({...edit,title: e.target.value})}}/> </>: title}
            <input type='checkbox' checked={done} onChange={handleDone}></input>
            <button onClick={handleDelet}> delete</button>
            <button onClick={() => setShow(true)} onChange={(e)=>{setEdit({title:e.target.value})}}> update</button>

            

        </div>
    )
}

export default Task