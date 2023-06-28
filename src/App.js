import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/loader/preloader';
import Navigation from './components/navigation/navigation';
import SearchBar from './components/searchbar/searchbar';
import TopRatedMovies from './components/moviecard/toprated';
import Recent from './components/navigation/recent';
import HomeCard from './components/searchbar/homecard';
import './index.css';
import 'animate.css'; 


function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="App-header">
          {/* Hero Section */}
          <div className="hero">
            {/* Navigation */}
            <Navigation />

            {/* Search Bar */}
            <div className="search">
              <h1 className="text animate__heartBeat animate__zoomIn">Time to watchMe</h1>
              <SearchBar />
            </div>
          </div>

          {/* Preloader Component */}
          <Preloader myForm={true} />

          {/* Routes */}
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<TopRatedMovies />} />

            {/* Recent Route */}
            <Route path="/recent" element={<Recent />} />
          </Routes>
        </header>
      </div>

      {/* HomeCard Component */}
      <HomeCard />
    </Router>
  );
}

export default App;
