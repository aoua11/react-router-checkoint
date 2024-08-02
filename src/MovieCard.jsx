import { Link } from 'react-router-dom';

export default function MovieCard ({ movie }){

  <Link to={`/movies/${movie.id}`}>
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
    </div>
  </Link>
}

