import Appbar from "./AppBar/AppBar";

import { getTrandingFilms } from "services/Api";

export function App() {

  getTrandingFilms().then(r => console.log(r.results))
  return (
    <>
      <Appbar />
    </>
  );
};
