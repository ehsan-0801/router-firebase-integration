import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

const auth = getAuth()
const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>welcome to the shop sir:</h2>
            {
                user ? user.displayName : ''
            }
        </div>
    );
};

export default Products;