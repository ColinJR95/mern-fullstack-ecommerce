import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
	return (
		<div className='header'>
			<img className="header_logo" src='https://www.javiercolin.com/wp-content/uploads/2019/01/Full-Logo-Color-2014x500.png' alt ="this is our logo not loading"/>

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