import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className="footer-subscription-heading">
                Subscribe to the newsletter to receive ultimate deals
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe anytime
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder='Your email@abc.com' className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>       
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact Us</h2>       
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Social Media</h2>       
                    <Link to='/'>Twitter</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Instagram</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' 
                    // target='_blank'
                    className="social-logo">
                        TRAVEL <i className="fab fa-typo3">
                        </i>
                    </Link>
                </div>
                <small className="website-rights">
                    TRAVEL © 2024
                </small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook"
                    to='/'
                    target='_blank'
                    aria-label='Facebook'>
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="social-icon-link instagram"
                    to='/'
                    target='_blank'//here _blank opens a new page
                    aria-label='Instagram'>
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="social-icon-link youtube"
                    to='/'
                    target='_blank'//here _blank opens a new page
                    aria-label='Youtube'>
                        <i className="fab fa-youtube"></i>
                    </Link>
                    <Link className="social-icon-link twitter"
                    to='/'
                    target='_blank'//here _blank opens a new page
                    aria-label='Twitter'>
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="social-icon-link linkedin"
                    to='/'
                    target='_blank'//here _blank opens a new page
                    aria-label='LinkedIn'>
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer