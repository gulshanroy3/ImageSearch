import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routing from "../src/routing"
import Notification from "./components/Notification"
function App() {
  return (
    <div className='App'>
      <Router>
        <Routing />
        <Notification />
      </Router>
    </div>

  );
}

export default App;
