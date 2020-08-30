import React, { useState, useContext } from 'react';
import { onLogout } from '../App';
import {  toast } from 'react-toastify';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const changeLoginStatus = useContext(onLogout );
  const toggle = () => setIsOpen(!isOpen);
  const logout = ()=>{
    fetch('/user/logout',{
      method:'GET',
      credentials:'same-origin'
    }).then(res=>{
      res.json().then(data=>{
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
      })
    })
  }
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Forms</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink tag={Link} to="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
             {props.userStatus?<NavLink tag={Link} to="/createForm">createForm</NavLink>
             :null} 
            </NavItem>
            <NavItem>
             {props.userStatus?<NavLink href="#"  onClick={logout}>LogOut</NavLink>
             :<NavLink tag={Link} to="/logIn">LogIn</NavLink>} 
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;