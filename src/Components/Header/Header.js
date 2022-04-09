import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'
const Header = () => {
    const { user, handleSignOut } = useFirebase()
    return (
        <div className="Header">
            <nav>
                <Link to="/" >HOME</Link>
                <Link to="/products" >PRODUCTS</Link>
                <Link to="/orders" >ORDERS</Link>
                <Link to="/register" >REGISTER</Link>
                <span>
                    { user?.displayName && user.displayName }</span>
                {
                    user?.uid
                        ?
                        <button onClick={ () => handleSignOut() }>sign out</button>
                        :
                        <Link to="/login">Login</Link>
                }
            </nav>
        </div >
    );
};

export default Header;