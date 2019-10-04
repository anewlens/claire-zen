import React from 'react'
import ImageLoader from './ImageLoader'

const ItemDropDown = ({item}) => (
    <div className="ItemDropDown">
        <ImageLoader className='ItemImg' image={item.leadImage}/>
        <div className="ItemDropDown-text">
            <p className='ItemDropDown-description'>{item.text}</p>
            <div className="ItemDropDown-right">
                <h3 className="ItemDropDown-title">{item.title}</h3>
                {item.Credits.map(credit => <p className='ItemDropDown-credits'>{credit}</p>)}
            </div>
        </div>
            {item.images.map(image => <ImageLoader className='ItemImg' image={image}/> )}

    </div>
)

export default ItemDropDown