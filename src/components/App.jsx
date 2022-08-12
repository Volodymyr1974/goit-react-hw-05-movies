import Appbar from "./AppBar/AppBar";
// import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import HomeView from "views/HomeView";
import MoviesView from "views/MoviesView";


export function App() {

  return (
    <>
      <Appbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="movies" element={<MoviesView />} />
      </Routes>
    </>
  );
};
