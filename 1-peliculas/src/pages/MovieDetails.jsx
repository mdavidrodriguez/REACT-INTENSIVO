import { useParams } from "react-router-dom"
import { get } from "../data/httpClient"
import { useState, useEffect } from "react"
import getMovieImg from "../utils/getMovieImg"
import '../pages/MovieDetails.css'

const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, Setmovie] = useState([])
    const [generos, SetGeneros] = useState([])

    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
            Setmovie(data)
            SetGeneros(data.genres[0])
            console.log(data);
        })
    }, [movieId])
    const imageUrl = getMovieImg(movie.poster_path, 500)
    return (
        <div className="detailsContainer">
            <img src={imageUrl} alt={movie.title} className="col movieImage" />
            <div className="col movieDetails">
                <p className="title">
                    <strong>Título: </strong>
                    {movie.title}
                </p>
                <p>
                    <strong>Género: </strong>
                    {generos.name}
                </p>
                <p>
                    <strong>Descripcion: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    )
}

export default MovieDetails