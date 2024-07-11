import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Routes, Navigate   } from 'react-router-dom';
//import StatsPage from './pages/StatsPage/StatsPage';
import CarPage from '@/pages/CarPage/ui/CarPage';
//import AucPage from './pages/AucPage/AucPage';
import { AboutPage } from '@/pages/AboutPage/AboutPage';
/*
          <Route path="/carstats" Component={StatsPage} />
          <Route path="/aucstats" Component={AucPage} />
*/
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" Component={AboutPage} />
          <Route
          path="/"
          element={<Navigate to="/" replace />}
          />
          <Route path="/carpage/*"  Component={CarPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
