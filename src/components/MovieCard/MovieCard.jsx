// import { useState, useEffect } from 'react';
// import { Outlet, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { MainInfo } from './MainInfo';
// import { AdditionalInfo } from './AdditionalInfo';

// export const MovieCard = () => {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/movie/${movieId}?api_key=894ef72300682f1db325dae2afe3e7e2`
//       )
//       .then(resp => {
//         return setMovie(resp.data);
//       });
//   }, [movieId]);

//   console.log(movie);
//   return (
//     <div>
//       {movie && (
//         <div>
//           <button type="button">👈 Go back</button>
//           <MainInfo
//             posterSrc={`https://www.themoviedb.org/t/p/w300${movie.poster_path}`}
//             title={movie.original_title}
//             releaseDate={new Date(movie.release_date).getFullYear()}
//             vote_average={Math.round(movie.vote_average * 10)}
//             overview={movie.overview}
//             genres={movie.genres}
//           />
//           <hr />
//           <AdditionalInfo />
//           <hr />
//           <Outlet />
//         </div>
//       )}
//     </div>
//   );
// };
