import React, { Component } from 'react';
import "../styles/ImageList.css";

export default class ImageCard extends Component {
    render() {
        return (
            <div>
                <img alt={this.props.image.description}
                    src={this.props.image.urls.regular}
                    className='image'
                />
            </div>
        )
    }
}
