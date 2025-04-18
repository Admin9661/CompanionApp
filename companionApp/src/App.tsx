import React from 'react';
//import Header from './components/Header';
// import Events from './components/Events';
// import TPOUpdates from './components/TPOUpdates';
// import Reminders from './components/Reminders';
import './App.css';
//import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
};

export default App;
