import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import ShiftScreen from './screens/ShiftScreen';
import ReportsScreen from './screens/ReportsScreen';
import CalcScreen from './screens/CalcScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shift" element={<ShiftScreen />} />
        <Route path="/reports" element={<ReportsScreen />} />
        <Route path="/calc" element={<CalcScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
