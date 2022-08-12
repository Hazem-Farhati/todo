import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { toggle, deletTodo, updateTodo } from '../redux/todoSlice'
import "../styles/task.css"
import { FcOk, FcEmptyTrash, FcSettings } from "react-icons/fc";


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
        <>
            <div className='big_container'>
                <div className='container'>
                    {show ? <> <button onClick={() => { setShow(false); handleUpdate() }}> <FcOk className='save' />
                    </button>
                       <input className='inptit' type="text" defaultvalue={title} onChange={(e) => { setEdit({ ...edit, title: e.target.value }) }} /> </> : <h2 className='tit'>{title}</h2>}
                    <div className='crud'>
                        <input type='checkbox' className='checkbox' checked={done} onChange={handleDone}></input>
                        <button onClick={handleDelet}> <FcEmptyTrash className='delet' /></button>
                        <button onClick={() => setShow(true)} onChange={(e) => { setEdit({ title: e.target.value }) }}> <FcSettings className='update' /></button>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Task