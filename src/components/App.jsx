import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home';
import { Movies } from 'pages/Movies';
import { MovieCard } from './MovieCard';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieCard />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
