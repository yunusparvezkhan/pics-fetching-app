import React from 'react';

const ImageList = (props) => {
    const results = props.images.map((image, i) => {
        return <img key={i} src={image.urls.regular} />
    })
    return <div>{results}</div>
}

export default ImageList;