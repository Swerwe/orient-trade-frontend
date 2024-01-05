import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate   } from 'react-router-dom';
import StatsPage from './pages/StatsPage/StatsPage';
import CarPage from './pages/CarPage/CarPage';
import AucPage from './pages/AucPage/AucPage';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
          path="*"
          element={<Navigate to="/aucstats" replace />}
          />
          <Route path="/carstats" Component={StatsPage} />
          <Route path="/aucstats" Component={AucPage} />
          <Route path="/carpage/*" Component={CarPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
