import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth()
const Home = () => {
    // const { user } = useFirebase()
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>This is Home</h2>
            <h3>Current Use: <small style={ { color: 'red' } }>{ user ? user.displayName : 'None Logged in' }</small> </h3>
        </div>
    );
};

export default Home;