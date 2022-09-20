import React from 'react'

export default function TodosItem(props) {

    let item = {
        display: "block",
        position: "relative",
        width: "100%",
        border: "2px solid",

    }

    let str = (props.todo.title[0]).toUpperCase();
    let letter = {
        width: "3rem",
        height: "3rem",
        "font-size": "2rem",
        "text-align": "center",
        border: "2px solid grey",
        "border-radius": "8px",
        "margin-top": "10px"
    }

    let star = (x) => {
        if (x) {
            return (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                </>
            )
        }
    }

    return (
        <div className="container my-4 card" style={item}>
            <div className="card-body">
                <div style={letter}>{str}</div>
                <h5 className="card-title">{props.todo.title}   {star(props.todo.check)}</h5>
                <p className="card-text">{props.todo.desc}</p>
                <button className='btn btn-sm btn-danger' onClick={() => { props.onDelete(props.todo) }}>Delete</button>
                <hr />
            </div>
        </div>
    )
}
