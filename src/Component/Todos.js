import React from 'react'
import TodosItem from './TodosItem'

export default function Todos(props) {

  let todostyle = {
    background: "none",
    border: "2px solid",
    padding: "1%"
  }
  return (
    <div className="container card my-3" style={todostyle}>
      <h2 className='my-3'>ToDos list</h2>
      {props.todo.length === 0 ? "Woow!! No todos to Do" : props.todo.map((ele) => {
        return <TodosItem todo={ele} key={ele.sno} onDelete={props.onDelete} />
      })
      }
    </div>
  )
}
