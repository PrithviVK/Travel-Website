import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick=()=>setClick(!click) /*function to set setClick */
    const closeMobileMenu=()=>setClick(false)// This sets the 'click' state to false, closing the mobile menu

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };
    {/**above is the function to resize button when on mobile and desktop */}

    useEffect(()=>{
        showButton();
    },[]);
    {/**above hook is used so that when page is refreshed everytime in mobile view 
        the 'Sign Up' button is not shown everytime */}

    window.addEventListener('resize',showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>{/* here Link from react-router-dom acts as the <a></a> tag in html and 'to' refers to which place*/}
               {/** onClick={closeMobileMenu} is used to close mobile based menu on clicking logo */}
               Travel <i className='fab fa-typo3' />{/*now we add it to App.js*/} 
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                {/*if clicked then hamburger menu('fas fa-bars') else 'fas fa-times' */}
            </div>
            <ul className={click ?  'nav-menu active':'nav-menu'}>{/*when clicking menu it should disappear*/}
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul> 
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            {/*shortcut for: if button is true then statements after '&&' are executed for now button variable isn't yet declared 
            in the above we are passing SIGN UP as children to Button component*/}
        </div>
    </nav>
    </>
  )
}

export default Navbar