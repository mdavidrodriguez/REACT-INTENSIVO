import { useEffect, useState } from "react"
import {get} from '../data/httpClient'
import MovieCard from "./MovieCard"
import '../components/ContextMovieCard.css'

const ContextMovieCard = () => {
  const [movies, Setmovies] = useState([])
  useEffect(()=>{
    get("/discover/movie").then((data)=>{
      Setmovies(data.results)
      console.log(data);
    })
  },[])
  return (
   <ul className="container">
    {movies.map((movie)=>(
      <MovieCard key={movie.id} movie={movie}/>
    ))}
   </ul>
  )
}

export default ContextMovieCard