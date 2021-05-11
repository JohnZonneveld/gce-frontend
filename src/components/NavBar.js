import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'
 
const link = {
	width: '100px',
	padding: '6px 10px 6px 10px',
	margin: '6px 6px 6px 6px',
	background: '#2F9B30',
	textDecoration: 'none',
	color: 'white',
	borderRadius: '30px',
}
 
class NavBar extends React.Component {
	render() {
		return (
			<div className="Navbar">
				<NavLink
					to="/"
					/* set exact so it knows to only set activeStyle when route is deeply equal to link */
					exact
					/* add styling to Navlink */
					style={link}
					/* add prop for activeStyle */
					activeStyle={{
						background: 'darkgreen'
					}}
				>Home</NavLink>
				<NavLink
					to="/about"
					exact
					style={link}
					activeStyle={{
						background: 'darkgreen'
					}}
				>About</NavLink>
				<NavLink
					to="/members"
					exact
					style={link}
					activeStyle={{
						background: 'darkgreen'
					}}
				>Members</NavLink>
				<NavLink
					to="/tours"
					exact
					style={link}
					activeStyle={{
						background: 'darkgreen'
					}}
				>Tours</NavLink>
			</div>
		)
	}
}
 
export default NavBar;