import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
import "./App.css";

function Welcome() {
  return <h2>Welcome to the App! Click on the link to visit Posts.</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
