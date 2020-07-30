import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routing from "../src/routing"
function App() {
  return (
    <div className='App'>
      <Router>
        <Routing />
      </Router>
    </div>

  );
}

export default App;
