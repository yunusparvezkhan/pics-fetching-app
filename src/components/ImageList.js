import React from 'react';
import "../styles/ImageList.css";

const ImageList = (props) => {
    const results = props.images.map(({ id, description, urls }) => {
        return <img key={id} alt={description} src={urls.regular} className='image' />
    })
    return <div className='container-div' >{results}</div>
}

export default ImageList;