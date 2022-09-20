import React from 'react'

export default function Footer() {

  let footerstyle={
    position: "absolute",
    width: "100%",
    bootom: "0"
  }
  return (
    <footer className='bg-black text-light py-2' style={footerstyle}>
      <p className='text-center'>
        Copyright &copy; MyTodoList.com
      </p>
    </footer>
  )
}
