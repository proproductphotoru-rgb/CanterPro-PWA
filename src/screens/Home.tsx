import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="app-title">Мой рабочий кабинет</h1>
      <div className="buttons-grid">
        <Link to="/shift" className="btn">Начать рабочую смену</Link>
        <Link to="/reports" className="btn">Отчёты и аналитика</Link>
        <Link to="/calc" className="btn">Предварительный расчёт</Link>
      </div>
    </div>
  );
}

export default Home;
