import React from 'react';
import './App.css';
import Menu from "./components/Menu";
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';

function App() {
  return (
    <div className="App"> 
     <Menu/>
     <Switch>
     <Route path="/about">
            <About />
      </Route>
      <Route path="/login">
            <Login />
      </Route>
     </Switch>
    </div>
  );
}

export default App;
