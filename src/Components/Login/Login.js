import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

const auth = getAuth()
const Login = () => {
    // const { signInWithGoogle } = useFirebase();
    const [SignInWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h3>Please Login</h3>
            <div style={ { margin: '20px' } }>
                <button onClick={ () => SignInWithGoogle() } >Google Sign In</button>
            </div>

            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;