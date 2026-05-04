import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(window.innerWidth > 600)

    return (
        <>
        <button
            className="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Collapse navigation" : "Expand navigation"}
        >
            {isOpen ? "×" : "☰"}
        </button>

        <nav className={isOpen ? "navbar" : "navbar collapsed"}>
            <button className="navbar-toggle" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label={isOpen ? "Collapse navigation" : "Expand navigation"}
                >
                {isOpen ? "←" : "→"}
            </button>

            <div className="navbar-logo">
                <span className="logo-expanded">Bitesmith</span>
                <span className="logo-collapsed">B</span>
            </div>

            <NavLink to="/" className="nav-link">
                <span className="link-full">Home</span>
                <span className="link-short" aria-hidden="true">H</span>
            </NavLink>

            <NavLink to="/about" className="nav-link">
                <span className="link-full">About</span>
                <span className="link-short" aria-hidden="true">A</span>
            </NavLink>

            <NavLink to="/reviews" className="nav-link">
                <span className="link-full">Reviews</span>
                <span className="link-short" aria-hidden="true">R</span>
            </NavLink>
            
            <div className='navbar-footer'>
                <div className='diamond' />
                <p>2026</p>
            </div>
        </nav>
        </>
        
    )
}