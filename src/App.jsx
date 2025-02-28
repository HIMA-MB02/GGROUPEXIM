import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routes from './routes/Routes';

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes />
    </HashRouter>
  );
};

export default App;
