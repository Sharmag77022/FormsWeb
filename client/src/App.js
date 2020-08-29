import React, { useEffect, useState } from 'react';
import './App.css';
import Menu from "./components/Menu";
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';

function App() {
 const [loginStatus,setloginStatus]= useState(false);
  useEffect(()=>{
      fetch('/user/loginStatus',{
        method:'GET',
        credentials:'same-origin'
      }).then(res=>{
        res.json().then(data=>{
        if(data.status&&!loginStatus){
          setloginStatus(true);
        }else if(!data.status && loginStatus){
          setloginStatus(false);
        }
        })
      })
  })
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
