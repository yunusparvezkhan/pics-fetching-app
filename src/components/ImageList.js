import React from 'react';

const ImageList = (props) => {
    const results = props.images.map((image) => {
        console.log(image.links.download)
        return <img src={image.urls.regular} />
    })

    return <div>{results}</div>
}

export default ImageList;