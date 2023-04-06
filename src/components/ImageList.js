import React from 'react';

const ImageList = (props) => {
    const results = props.images.map(({ id, description, urls }) => {
        return <img key={id} alt={description} src={urls.regular} />
    })
    return <div>{results}</div>
}

export default ImageList;