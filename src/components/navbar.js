import React from 'react';
import '../Styles/navbar.css'
function Navbar() {
return (
<nav className="navbar">
<div className="navbar-logo">MyLogo</div>
<ul className="navbar-menu">
<li><a href="#" className="navbar-link">Home</a></li>
<li><a href="#" className="navbar-link">About</a></li>
<li><a href="#" className="navbar-link">Services</a></li>
<li><a href="#" className="navbar-link">Contact</a></li>
</ul>
</nav>
);
}
export default Navbar;