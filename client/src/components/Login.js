import React, { useState } from 'react';
import './css/loginForm.css'

const Login = () => {
    const [login,setLogin]= useState(true);

    const [input,setInput] = useState({email:'',password:''});

    const [SignUpInput,setSignUpInput]= useState({name:'',email:'',password:''})

    const newSignUpInput =(e)=>{
        const {name,value}=e.target;
        setSignUpInput(prevState=>({
            ...prevState,
            [name]:value
        }))
    }
    const newInput =(e)=>{
        const {name,value}=e.target;
        setInput(prevState=>({
            ...prevState,
            [name]:value
        }))
    }

  return (
     <> 
     
     {login?<>
        
        <br/><br/><br/><br/>
        <div className="row ">
        <form className=" col-10 col-sm-6 p-4 mx-auto border ">
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input onChange={newInput} name="email" value={input.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input name="password" onChange={newInput} value={input.password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
           
            <button type="submit" className="btn btn-primary">LogIn</button>
            </form>
            
            <br/>
            <span className="text-danger text-center col-12 mt-5">Don't have an Account&nbsp;<button onClick={()=>{setLogin(false)}} className="btn btn-success">Register Here</button></span>
            </div></>:<>
            <br/><br/><br/><br/>
            <div className="row ">
            <form className="col-10 col-sm-6 p-4 mx-auto border ">
            <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input onChange={newSignUpInput} name="name" value={SignUpInput.name} type="name" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input onChange={newSignUpInput} name="email" value={SignUpInput.email} type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input name="password" onChange={newSignUpInput} value={SignUpInput.password} type="password" className="form-control"  placeholder="Password"/>
            </div>
           
            <button type="submit" className="btn btn-primary">SignUp</button>
            </form></div>
        </>}
     
    </>
  );
}

export default Login;