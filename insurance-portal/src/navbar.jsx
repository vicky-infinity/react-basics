import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'} end >Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}>About</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}>Contact Us</NavLink>
    </nav>
  );
}

export default Navbar