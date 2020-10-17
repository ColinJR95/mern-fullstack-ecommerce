import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
	return (
		<div className='header'>
			<img className="header_logo" src='https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/120848646_120240026502211_2460028825837157574_o.png?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=jwJ1HMcQwVQAX9h8Hi9&_nc_ht=scontent-lax3-1.xx&oh=197c20a16dec457f09e806fd9402cc2d&oe=5FAE79C9' />

			<div className="header_search">
				<input className="header_searchInput" type="text" />
			<SearchIcon className="header_searchIcon" />
			</div>

			<div className="header_nav">
				<div className="nav_options">
						<span className="nav_optionLineOne">
							Hello Guest 
						</span>
						<span className="nav_optionLineOne">
							Sign In 
						</span>
				</div>

				<div className="nav_options">
				<span className="nav_optionLineOne">
							Returns
						</span>
						<span className="nav_optionLineOne">
							& Orders
						</span>
				</div>

				<div className="nav_options">
				<span className="nav_optionLineOne">
							Your 
						</span>
						<span className="nav_optionLineOne">
							Account
						</span>
				</div>
				 

				 <div className="nav_options">
				 cart
				</div>


			</div>
		</div>
	)
}

export default Header