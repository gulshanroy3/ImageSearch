import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routing from "../src/routing"
import Notification from "./components/Notification"
function App() {
  return (


    <Router>
      <Routing />
      <Notification />
    </Router>

  );
}

export default App;
