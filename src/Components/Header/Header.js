import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'
const Header = () => {
    const auth = getAuth()
    // const { user, handleSignOut } = useFirebase()
    const [user] = useAuthState(auth)
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
                        <button onClick={ () => signOut(auth) }>sign out</button>
                        :
                        <Link to="/login">Login</Link>
                }
            </nav>
        </div >
    );
};

export default Header;