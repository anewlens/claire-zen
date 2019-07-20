import React from 'react'

const ItemDropDown = ({item}) => {

    return (
        <div className="ItemDropDown">
            <a href={`${window.location.origin}/images/${item.leadImage}`}><img src={`${window.location.origin}/images/${item.leadImage}`} alt="Best Boy" className="ItemImg"/></a>
            {item.text.map(p => <p className='Work-paragraph'>{p}</p>)}
            {item.images.map(image => <a href={`${window.location.origin}/images/${image}`}><img className='ItemImg' src={`${window.location.origin}/images/${image}`} alt={image} /></a> )}

        </div>
    )
}

export default ItemDropDown