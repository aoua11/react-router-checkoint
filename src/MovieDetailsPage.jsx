import { useParams, Link } from 'react-router-dom';

export default function MovieDetailsPage(){
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title="Movie Trailer"
      ></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
};
