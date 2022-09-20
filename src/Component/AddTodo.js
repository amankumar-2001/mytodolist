import React from 'react'
import { useState } from 'react';

export default function AddTodo(props) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [check, setcheck] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can't be blank.");
        }
        else {
            props.addTodo(title, desc,check);
            settitle("");
            setdesc("");
        }
    }

    let addstyle={
        background:"none",
        border:"2px solid",
        padding:"1%"
    }
    return (
        <div className='card my-5 container' style={addstyle}>
            <h1 className='text-center'>Add a ToDo</h1>
            <form onSubmit={submit}>
                <fieldset enable>
                    <legend>Todo form</legend>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} id="title" className="form-control" placeholder="ToDo Title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <textarea id="desc" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" placeholder='Describe'></textarea>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" value={check} onChange={(e) => { setcheck(e.target.checked) }} type="checkbox" id="check" enable />
                            <label className="form-check-label" htmlFor="enableFieldsetCheck">
                                Mark as Important
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success btn-sm">Add ToDo</button>
                </fieldset>
            </form>
        </div>
    )
}
