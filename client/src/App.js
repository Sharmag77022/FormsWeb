import React, { useEffect, useState , createContext} from 'react';
import './App.css';
import Menu from "./components/Menu";
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Login from './components/Login';
import CreateForm from './components/CreateForm';
const onLogout = createContext();
function App() {
 const [loginStatus,setloginStatus]= useState();
 const changeLoginStatus =()=>{
   setloginStatus(!loginStatus);
 }
  useEffect(()=>{
     console.log(loginStatus);

      fetch('/user/loginStatus',{
        method:'GET',
        credentials:'same-origin'
      }).then(res=>{
        
        res.json().then(data=>{
        if(data.status&&!loginStatus){
          setloginStatus(true);
        }else if(!data.status){
          setloginStatus(false);
        }
        })
      })
  })
  return (
    <div className="App"> 
    <onLogout.Provider value={changeLoginStatus}>
     <Menu userStatus={loginStatus}/> 
    
     
     <Switch>
     <Route path="/about">
            <About />
      </Route>
      <Route path="/login">
          {loginStatus?<CreateForm />:<Login status={true} />} 
      </Route>
      <Route path="/register">
          {loginStatus?<CreateForm />:<Login status={false}/>} 
      </Route>
      <Route path="/createForm">
        <CreateForm />
      </Route>
     </Switch>
     </onLogout.Provider>
    </div>
  );
}

export default App;
export { onLogout };
