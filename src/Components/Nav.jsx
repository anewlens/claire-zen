import React from 'react'
import {ReactComponent as Logo} from '../SVG/Caz Logo.svg'

const Nav = ({position}) => {

    return (
        <nav className="Nav">
            <div className="Nav-bar">
                <a 
                    href="#About" 
                    className="Nav-link"
                    style={{color:position < 800 && 'var(--Blood)', transition: 'all .2s'}}>About</a>
                <a 
                    href="#Work" 
                    className="Nav-link"
                    style={{color: (position > 800 && position < 3400) && 'var(--Sand)', transition: 'all .2s'}}>Work</a>
                <a 
                    href="#Contact" 
                    className="Nav-link"
                    style={{color:position > 3400 && 'var(--Sky)', transition: 'all .2s'}}>Contact</a>
            </div>
            <Logo className='Nav-logo'/>
        </nav>
    )
}

export default Nav