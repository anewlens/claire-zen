import React from 'react'
import ProgressiveImage from 'react-progressive-image'

const ImageLoader = ({className, image}) => (
    <ProgressiveImage
        src={`${window.location.origin}/images/web_${image}`}
        placeholder={`${window.location.origin}/images/lazy_${image}`}>
        {src => <img src={src} className={className} alt={image}/>}
    </ProgressiveImage>
)

export default ImageLoader