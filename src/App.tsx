import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import {NavBar} from "./components/NavBar";
import {Objectives} from "./components/Objectives";

function App() {
  return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/objectives" element={<Objectives/>}/>
        </Routes>
      </div>
  );
}

function Home() {
  return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
  );
}

export default App;
