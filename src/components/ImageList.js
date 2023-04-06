import React from 'react';
import ImageCard from "./ImageCard";
import "../styles/ImageList.css";

const ImageList = (props) => {
    const results = props.images.map((img) => {
        return <ImageCard key={img.id} image={img} />
    })
    return <div className='container-div' >{results}</div>
}

export default ImageList;