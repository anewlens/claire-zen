import React from 'react'

const Separator = ({image}) => {
    return (
        <div 
            className="Separator"
            style={{
                backgroundImage: `url('${window.location.origin}/images/${image}')`
            }} />
    )
}

export default Separator