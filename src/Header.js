import React from 'react'
import './Header.css'

function Header() {
	return (
		<div className='header'>
			<img src='https://www.javiercolin.com/wp-content/uploads/2020/10/cropped-Full-Logo-Black-300x74.png' alt ="this is our logo not loading"/>

			<div className="header_search">
				<input className="header_searchInput" type="text" />
			{  /*logo */ }
				this is the search component
			</div>
		</div>
	)
}

export default Header