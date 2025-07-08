import React, { useState } from "react";
import '../style/Header.css'; 

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <h1><a href="/" style={{ textDecoration: 'none',color:'#F0DAC5' }}>Adv. Sonam Pandey</a></h1>
            <nav>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/specialist">Specialist</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/Gallery">Gallery</a></li>
                    <li><a href="/testimonials">Testimonials</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <button><a href="/consultation" style={{ textDecoration: 'none',color:'#F0DAC5'}}>Consultation</a></button>
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
                    <li><a href="/" onClick={toggleMenu}>Home</a></li>
                    <li><a href="/about" onClick={toggleMenu}>About</a></li>
                    <li><a href="/specialist" onClick={toggleMenu}>Specialist</a></li>
                    <li><a href="/services" onClick={toggleMenu}>Services</a></li>
                    <li><a href="/blog" onClick={toggleMenu}>Blog</a></li>
                    <li><a href="/Gallery" onClick={toggleMenu}>Gallery</a></li>
                    <li><a href="/testimonials" onClick={toggleMenu}>Testimonials</a></li>
                    <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
                    <button onClick={toggleMenu}><a href="/consultation" style={{ textDecoration: 'none',color:'#F0DAC5'}}>Consultation</a></button>
                </ul>
            </div>
        </header>
    );
}
export default Header;
