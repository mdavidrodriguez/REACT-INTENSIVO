import { useState, useEffect } from "react"
const Prueba = () => {
    const [likes, setLikes] = useState(0)
    const [tema, setTemas] = useState(false);
    const cambiarTema = () => {
        setTemas(true);
        console.log(tema);
    }
    const darlike = () => {
        setLikes(likes + 1)
    }
    const quitarLike = () => {
        setLikes(likes - 1)
    }
    useEffect(darlike,[])
    return (
        <div>
            <h1>Likes {likes}</h1>
            <button onClick={darlike}>Dar Like</button>
            <button onClick={quitarLike}>Quitar Like</button>
            <button onClick={cambiarTema}>Cambiar Tema</button>
        </div>
    )
}

export default Prueba