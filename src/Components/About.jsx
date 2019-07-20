import React from 'react'
import '../Styles/About.styles.scss'

const About = () => {
    return (
        <section id='About' className="About">
            <h3 className='About-content'>
                <p className="About-paragraph">
                    Hi, I'm <span>Claire Zen</span>, a Graphic Designer based in New York City.
                </p>

                <p className="About-paragraph">
                    <a href="#Work">Let's look at my work.</a>
                </p>
            </h3>
        </section>
    )
}

export default About