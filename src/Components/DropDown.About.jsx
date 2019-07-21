import React from 'react'

const DropDown = () => {
    return (
        <div className="About-DropDown">
            <p className="About-description">Claire has a BFA in Graphic Design from Virginia Commonwealth University and currently works at Money20/20 helping deliver memorable marketing and event imagery. Primarily a 2D designer, she also has experience in fashion and product design.</p> 
            <p className="About-description">In her spare time she’s designing and writing a Star Wars DnD campaign with her cat Ahsoka.</p>
            <img className='About-img' src={`${window.location.origin}/images/Soka Landscape.jpg`} alt="Soka"/>
        </div>
    )
}

export default DropDown