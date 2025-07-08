import React from "react";
import { Link } from "react-router-dom";
import '../style/Footer.css';
import { FaPhoneAlt } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return(
        <>
            <footer className="footer">
                <div className="first">
                    <h1>Adv. Sonam Pandey</h1>
                    <p>At Adv. Sonam Pandey, we are committed to delivering expert legal solutions with integrity and professionalism.</p>
                </div>
                <div className="second">
                    <h1>Quick Links</h1>
                    <ul>
                        <li><Link to="/"><IoIosArrowForward /> Home</Link></li>
                        <li><Link to="/about"><IoIosArrowForward /> About</Link></li>
                        <li><Link to="/specialist"><IoIosArrowForward /> Specialist</Link></li>
                        <li><Link to="/services"><IoIosArrowForward /> Services</Link></li>
                        <li><Link to="/Gallery"><IoIosArrowForward /> Gallery</Link></li>
                        <li><Link to="/testimonials"><IoIosArrowForward /> Testimonials</Link></li>
                    </ul>
                </div>
                <div className="third">
                    <h1>Contact Info</h1>
                    <ul>
                        <li><FaPhoneAlt /> Contact:+919321982330</li>
                        <li><a href=""><GiRotaryPhone /> Tel: </a></li>
                        <li><MdOutlineMail /> Email: work.sonampandey@gmail.com</li>
                    </ul>
                    <button><FaLinkedin /></button>
                </div>
                <div className="fourth">
                    <h1>Working Hours</h1>
                    <p><b>working hours:</b>10:00 AM - 9:30 PM</p>
                </div>
            </footer>
            <div className="copyright">
                <p>© 2023 Adv. Sonam Pandey. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer;
