import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../SignUp/AuthProvider/AuthProvider';

const Header = () => {
    
    const {user, logOut} = useContext(AuthContext);

     const logOuthandle = () => {
        logOut()
        .then(result => {})
        .catch(error => console.log(error))
     }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div> 
               {
               user &&  
               <span className='text-white'>welcom, {user.email} <button  className='text-green-800' onClick={logOuthandle}>Log Out</button></span>
               } 
                
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
            </div>
        </nav>
    );
};

export default Header;