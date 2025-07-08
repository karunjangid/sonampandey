import React from "react";
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
                        <li><a href="/"><IoIosArrowForward /> Home</a></li>
                        <li><a href="/about"><IoIosArrowForward /> About</a></li>
                        <li><a href="/specialist"><IoIosArrowForward /> Specialist</a></li>
                        <li><a href="/services"><IoIosArrowForward /> Services</a></li>
                        <li><a href="/Gallery"><IoIosArrowForward /> Gallery</a></li>
                        <li><a href="/testimonials"><IoIosArrowForward /> Testimonials</a></li>
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