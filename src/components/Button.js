import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES=['btn--primary','btn--outline']//'btn--primary','btn--outline' are css classes that are defined in button.css

const SIZES=['btn--medium','btn--large']
export const Button=({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
})=>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtinSize= SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtinSize}`} //example of template literal{} allows you to embed expressions or variables within the string.
            //btn: This is a static class name that is always applied to the button element.
            onClick={onClick}
            type={type}>
            {children}
            </button>

        </Link>
    )
}