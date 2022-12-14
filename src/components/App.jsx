import Appbar from "./AppBar/AppBar";
import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// import HomeView from "views/HomeView";
// import MoviesView from "views/MoviesView";
// import MovieDetailsView from 'views/MovieDetailsView';
// import Cast from 'views/Cast';
// import Reviews from 'views/Reviews';

const HomeView = lazy(() => import('../views/HomeView' /* webpackChunkName: "Home" */));
const MoviesView = lazy(() => import('../views/MoviesView' /* webpackChunkName: "Movies" */));
const MovieDetailsView = lazy(() => import('../views/MovieDetailsView' /* webpackChunkName: "MovieDetails" */));
const Cast = lazy(() => import('../views/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() => import('../views/Reviews' /* webpackChunkName: "Reviews" */));

export function App() {
  return (
    <>
      <Appbar />
      <Suspense fallback={<div>Завантажуємо....</div>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="movies" element={<MoviesView />} />
          <Route path="movies/:movieId" element={<MovieDetailsView />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
