import React from 'react'
import './Footer.css'
import { facebook, Whatsapp, Twitter, Instragram } from "../../assets"


const Footer = () => {
    return (
        <footer className='black'>
            <div className='wrapper'>
                <div className='content-container'>
                    <div className='links'>
                    <a href='#' className='logo'>
                        Player<span className='red'> UI Dezign</span>
                    </a>
                    <div className='soical-icons'>
                        <a href='#'>
                            <img src={facebook} alt="" />
                        </a>

                        <a href='#'>
                            <img src={Whatsapp} alt="" />
                        </a>

                        <a href='#'>
                            <img src={Twitter} alt="" />
                        </a>

                        <a href='#'>
                            <img src={Instragram} alt="" />
                        </a>
                    </div>

                    <div className='copyright'>
                        The website is designed by GTCoding 2023
                    </div>
                </div>

                <div className='links'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <a href='#'>Blog</a>
                        </li>

                        <li>
                            <a href='#'>Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                <div className='links'>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>
                            <a href='#'>contact@gmail.com</a>
                        </li>

                        <li>
                            <a href='#'>+1 999 9999 999</a>
                        </li>
                    </ul>
                </div>
             </div>
            </div>
        </footer>
    )
}

export default Footer
