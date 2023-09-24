import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./data/firebase";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (QuerySnapshot) => {
      let todosArray = [];
      QuerySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const [todos, setTodos] = useState([]);
  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };

  return (
    <div className="App">
      <div className="titulo" style={{textAlign:"center"}}>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      <div className="todo-container">
        {todos.map((todo) => (
          <Todo todo={todo} handleDelete={handleDelete} toggleComplete={toggleComplete}  handleEdit={handleEdit}/>
        ))}
      </div>
    </div>
  );
}

export default App;
