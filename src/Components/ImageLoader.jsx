import React from 'react'
import ProgressiveImage from 'react-progressive-image'

const ImageLoader = ({className, image}) => (
    <ProgressiveImage
    placeholder={`${window.location.origin}/images/lazy_${image}`}
    src={`${window.location.origin}/images/${image}`}>
        {src => <img src={src} className={className} />}
    </ProgressiveImage>
)

export default ImageLoader