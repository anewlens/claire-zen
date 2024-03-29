import React from 'react'
import ImageLoader from './ImageLoader'

const DropDown = () => {
    return (
        <div className="About-DropDown">
            <p className="About-description">Before moving to New York, Claire obtained a BFA in Graphic Design from Virginia Commonwealth University. She currently works at Money20/20 helping deliver memorable marketing and event imagery. Primarily a 2D designer, she also has experience in fashion and product design. She finds joy in satisfying animated gifs and beautiful, sustainable fashion packaging.</p> 
            <p className="About-description">In her spare time, Claire is designing a Star Wars DnD campaign at home with her cat Ahsoka. When she’s out and about, Claire is hunting for the best Cubano sandwich or looking out for the prettiest cloud.</p>
            <ImageLoader className='About-img' image='Soka Landscape.jpg'/>
        </div>
    )
}

export default DropDown