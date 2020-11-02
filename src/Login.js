import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
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
					<h5>Email</h5>
					<input type="text"/>

					<h5>Password</h5>
					<input type="password"/>
					<button className='login_signInButton'>Sign In</button>					
				</form>
				<p> 
					By signing-in you agree to the west coast microgardens Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className='login_registerButton'>Create an account</button>
			</div>
		</div>
	)
}

export default Login