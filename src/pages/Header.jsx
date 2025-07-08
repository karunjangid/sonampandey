import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../style/Header.css'; 

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <h1><Link to="/" style={{ textDecoration: 'none',color:'#F0DAC5' }}>Adv. Sonam Pandey</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/specialist">Specialist</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                    <li><Link to="/testimonials">Testimonials</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <button><Link to="/consultation" style={{ textDecoration: 'none',color:'#F0DAC5'}}>Consultation</Link></button>
                </ul>
            </nav>

            {/* Hamburger menu button */}
            <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') toggleMenu(); }}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Side menu */}
            <div className={`side-menu${menuOpen ? " active" : ""}`}>
                <button className="close-btn" onClick={toggleMenu} aria-label="Close menu">&times;</button>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/specialist" onClick={toggleMenu}>Specialist</Link></li>
                    <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                    <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
                    <li><Link to="/Gallery" onClick={toggleMenu}>Gallery</Link></li>
                    <li><Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    <button onClick={toggleMenu}><Link to="/consultation" style={{ textDecoration: 'none',color:'#F0DAC5'}}>Consultation</Link></button>
                </ul>
            </div>
        </header>
    );
}
export default Header;
