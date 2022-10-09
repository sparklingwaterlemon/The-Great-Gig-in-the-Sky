import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage";
import ActorIndexPage from "../ActorIndexPage/ActorIndexPage";
import MovieIndexPage from "../MovieIndexPage/MovieIndexPage";
import MovieDetailPage from "../MovieIndexPage/MovieDetailPage/MovieDetailPage";
import {movies} from "../../public/data.js";


import './App.css';
// imports above this line

function App() {
  const [user, setUser] = useState(null);

  function addUser(user){
    setUser(user);
  }

  return (
    <main className="App">
      { user ?
        <>
          <Routes>
            <Route path="/movies" element={<MovieIndexPage username={user.name} movies={movies}/>} />
            <Route path="/actors" element={<ActorIndexPage username={user.name} movies={movies} />} />
          
            <Route path="/movies/details/:id" element={<MovieDetailPage username={user.name} />} />
          </Routes>
        </>
        :
        <LoginPage addUser={addUser} />
      }
    </main>
  );
}

export default App;
