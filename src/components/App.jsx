import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Movies } from 'pages/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
};
