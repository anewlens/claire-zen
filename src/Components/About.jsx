import React, {useState} from 'react'
import '../Styles/About.styles.scss'
import {ReactComponent as Plus} from '../SVG/add-solid.svg'
import DropDown from './DropDown.About'

const About = () => {

    const [open, setOpen] = useState(false)

    return (
        <section id='About' className="About">
            <div className='About-content'>
                <p className="About-paragraph">
                    Hi, I'm <span>Claire Zen</span>, a Graphic Designer based in New York City.
                </p>
                <Plus className='About-Button' onClick={() => setOpen(!open)}/>
                {open && <DropDown />}
                <p className="About-paragraph">
                    <a href="#Work">Let's look at my work.</a>
                </p>
            </div>
        </section>
    )
}

export default About