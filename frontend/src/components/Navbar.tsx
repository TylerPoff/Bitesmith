import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>Bitesmith</div>

            <NavLink to="/" className="nav-link">
                Home
            </NavLink>

            <NavLink to="/about" className="nav-link">
                About
            </NavLink>

            <NavLink to="/reviews" className="nav-link">
                Reviews
            </NavLink>
            
            <div className='navbar-footer'>
                <div className='diamond' />
                <p>Started in 2026</p>
            </div>
        </nav>
    )
}