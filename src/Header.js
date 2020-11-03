import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {	
	const [{basket, user}, dispatch] = useStateValue();

	const handleAuthentication = () => {
		if(user) {
			auth.signOut();
		}
	}

	return (

		<div className='header'>
			<Link to='/'>
				<img className="header_logo" 
				src='https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/120848646_120240026502211_2460028825837157574_o.png?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=jwJ1HMcQwVQAX9h8Hi9&_nc_ht=scontent-lax3-1.xx&oh=197c20a16dec457f09e806fd9402cc2d&oe=5FAE79C9' 
				alt="this is the logo"
				/>

			</Link>
			<div className="header_search">
				<input className="header_searchInput" type="text" />
			<SearchIcon className="header_searchIcon" />
			</div>

			<div className="header_nav">
			<Link to={!user && '/login'}>
				<div onClick={handleAuthentication} className="nav_options">
						<span className="nav_optionLineOne">
							Hello {user?.email}
						</span>
						<span className="nav_optionLineTwo">
							{user ? 'Sign Out' : 'Sign In'}
						</span>
				</div>
			</Link>
				<div className="nav_options">
				<span className="nav_optionLineOne">
							Returns
						</span>
						<span className="nav_optionLineTwo">
							& Orders
						</span>
				</div>

				<div className="nav_options">
				<span className="nav_optionLineOne">
							Your 
						</span>
						<span className="nav_optionLineTwo">
							Account
						</span>
				</div>
				 
				<Link to="/checkout">
					<div className="nav_options_basket">
				 	<ShoppingBasketIcon/>
				 	<span className="nav__optionLineTwo nav_basketCount" >
				 	{basket?.length}
				 	</span>
					</div>
				</Link>



			</div>
		</div>
	)
}

export default Header