import React, { useState } from 'react'
import { db } from '../data/firebase'
import { collection, addDoc } from 'firebase/firestore'

const AddTodo = () => {
  const [title, setTitle] = useState([])
  const Insertar = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false
      }
      )
      setTitle("")
    }
  }
  return (
    <form onSubmit={Insertar}>
      <div className='input-container'>
        <input className='textTodo' type="text" placeholder='Ingresar Tarea...'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='btn-container'>
        <button>Insertar</button>
      </div>
    </form>
  )
}

export default AddTodo
