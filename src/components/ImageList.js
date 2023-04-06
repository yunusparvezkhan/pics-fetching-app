import React from 'react';

const ImageList = (props) => {
    const results = props.images.map((image) => {
        return <img key={image.id} alt={image.description} src={image.urls.regular} />
    })
    return <div>{results}</div>
}

export default ImageList;