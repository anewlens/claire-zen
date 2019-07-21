import React from 'react'

const ItemDropDown = ({item}) => {

    return (
        <div className="ItemDropDown">
            <a href={`${window.location.origin}/images/${item.leadImage}`}><img src={`${window.location.origin}/images/${item.leadImage}`} alt="Best Boy" className="ItemImg"/></a>
            <div className="ItemDropDown-text">
                <p className='ItemDropDown-description'>{item.text}</p>
                <div className="ItemDropDown-right">
                    <h3 className="ItemDropDown-title">{item.title}</h3>
                    {item.Credits.map(credit => <p className='ItemDropDown-credits'>{credit}</p>)}
                </div>
            </div>
                {item.images.map(image => <a href={`${window.location.origin}/images/${image}`}><img className='ItemImg' src={`${window.location.origin}/images/${image}`} alt={image} /></a> )}

        </div>
    )
}

export default ItemDropDown