import './App.css';

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { getUser } from '../../utilities/Users-Services/Users-Services';

import MoonLandingPage from '../MoonLandingPage/MoonLandingPage';
import SearchBar from '../../components/SearchBar/SearchBar';
import JouranalEntryPage from '../JournalEntryPage/JournalEntryPage';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';




function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      <main className="App">
        {/* <MoonLandingPage /> */}

        {user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/search" element={<SearchBar />} />
              <Route path="/journal" element={<JouranalEntryPage />} />
              <Route path="/moon" element={<MoonLandingPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />}

      </main>
    </>
  );
}

export default App;
