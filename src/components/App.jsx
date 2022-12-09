import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from '../pages/Home';
import { Cast, Reviews } from './MovieDetails';
import { Toaster } from 'react-hot-toast';

const Movies = lazy(() =>
  import('../pages/Movies').then(module => ({
    ...module,
    default: module.Movies,
  }))
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
};
