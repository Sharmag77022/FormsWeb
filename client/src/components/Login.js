import React, { useState , useContext } from 'react';
import './css/loginForm.css';
import {  useHistory } from "react-router-dom";
import {  toast } from 'react-toastify';
import { onLogout } from '../App';

const Login = (props) => {
    const [login,setLogin]= useState(props.status);
    const [input,setInput] = useState({email:'',password:''});
    const history = useHistory();
    const changeLoginStatus = useContext(onLogout);
    const [SignUpInput,setSignUpInput]= useState({name:'',email:'',password:''});
  

    const loginToggle = ()=>{setLogin(!login)};
    
    const userLogin= async(event)=>{
        event.preventDefault();
        var formData = new FormData();
        await formData.append("email", input.email);
        await formData.append("password", input.password);
        
        
        fetch('/user/login',{
            credentials: "same-origin",
            method: 'POST',
            // headers:{
            //     'Content-Type': 'multipart/form-data'
            // },
            body:formData
        }).then((res)=>{
            res.json().then(data=>{
                if(res.status===200){
                    changeLoginStatus();
                    toast.success(data.msg, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        }); 

                        history.push("/about");           
                }else{
                    toast.error(data.msg, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        })
                }
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    const newRegistration =async (event)=>{
        event.preventDefault();
        var formData = new FormData();
        await formData.append("name", SignUpInput.name);
        await formData.append("email", SignUpInput.email);
        await formData.append("password", SignUpInput.password);
        
        
        fetch('/user/register',{
            credentials: "same-origin",
            method: 'POST',
            // headers:{
            //     'Content-Type': 'multipart/form-data'
            // },
            body:formData
        }).then((res)=>{
            res.json().then(data=>{
                if(res.status===200){
                    toast.success(data.msg, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        }); 
                    loginToggle();   
                }else{
                    toast.error(data.msg, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        })
                }
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
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
        <form className=" col-10 col-sm-6 p-4 mx-auto border">
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input onChange={newInput} name="email" value={input.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input name="password" onChange={newInput} value={input.password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
           
            <button type="submit" onClick={userLogin} className="btn btn-primary">LogIn</button>
            </form>
            
            <br/>
            <span className="text-danger text-center col-12 mt-5">Don't have an Account&nbsp;<button onClick={loginToggle} className="btn btn-success">Register Here</button></span>
            </div></>:<>
            <br/><br/><br/><br/>
            <div className="row ">
            <form className="col-10 col-sm-6 p-4 mx-auto border " >
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
           
            <button type="submit" className="btn btn-primary" onClick={newRegistration}>SignUp</button>
            </form>
            <br/>
            <span className="text-danger text-center col-12 mt-5">Already have an Account&nbsp;<button onClick={loginToggle} className="btn btn-success">Login Here</button></span>
            </div>
        </>}
       
    </>
  );
}

export default Login;