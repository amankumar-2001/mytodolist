import './App.css';
import Header from './Component/Header'
import Footer from './Component/Footer';
import Todos from './Component/Todos';
import AddTodo from './Component/AddTodo';
import React, { useState } from 'react';
import { useEffect } from 'react';

function App() {
  let init;

  if (localStorage.getItem("todos") === null) {
    init = [];
  }
  else {
    init = JSON.parse(localStorage.getItem("todos"));
  }

  let onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc, check) => {
    let sno;
    if (todos.length > 0) {
      sno = todos[todos.length - 1].sno + 1;
    }
    else {
      sno = 0;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      check: Number(check)
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }


  const [todos, setTodos] = useState(init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <>
      <Header title="My ToDos List" />
      <AddTodo addTodo={addTodo} />
      <Todos todo={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
