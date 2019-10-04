import React from 'react'
import '../Styles/Contact.styles.scss'

import {ReactComponent as Instagram} from '../SVG/Instagram Icon.svg'
import {ReactComponent as LinkedIn} from '../SVG/LinkedIn Icon.svg'
import {ReactComponent as Mail} from '../SVG/Mail Icon.svg'

const Contact = () => {
    return (
        <section id='Contact' className="Contact">
            <h3 className="Contact-title">Let's get in touch.</h3>

            <div className='Contact-content'>
                <a href="https://instagram.com/caz.life" target='_blank' rel="noopener noreferrer" className="Contact-link" ><Instagram id='instagram' className='Contact-icon'  /></a>
                <a href="https://linkedin.com/in/claire-zen" target='_blank' rel="noopener noreferrer" className="Contact-link" ><LinkedIn id='linkedin' className='Contact-icon' /></a>
                <a href="mailto:clairezen13@gmail.com" className="Contact-link" ><Mail id='mail' className='Contact-icon' /></a>
            </div>
        </section>
    )
}

export default Contact