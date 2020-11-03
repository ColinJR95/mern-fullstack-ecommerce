import React from 'react'
import './Login.css'
import { Link , useHistory } from 'react-router-dom' 
import { auth } from './firebase'
import  { useState } from 'react'

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory()

	const signIn = e => {
		e.preventDefault();
		// here is some firebase login code

		auth.signInWithEmailAndPassword(email, password)
		.then(auth => {
			history.push('/')
		})
		.catch(error => alert(error.message))


	}

	const register = e => {
		e.preventDefault();
			// some more firebase register code
		auth.createUserWithEmailAndPassword(email, password)
		.then((auth) => {
			history.push('/')
		})
		.catch(error => alert(error.message))

	}

	return (
		<div className='login'>
			<Link to="/">	
				<img className='login_logo'
				src="https://www.javiercolin.com/wp-content/uploads/2019/01/Full-Logo-Color-2014x500.png" alt="image for out logo"
				/>
			</Link>
			<div className="login_container">
				<h1>Sign In</h1>

				<form action="">
					<h5>E-mail</h5>
					<input type="text" value={email} onChange={e => setEmail(e.target.value)} />

					<h5>Password</h5>
					<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
					<button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>					
				</form>
				<p> 
					By signing-in you agree to the west coast microgardens Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className='login_registerButton'>Create an account</button>
			</div>
		</div>
	)
}

export default Login