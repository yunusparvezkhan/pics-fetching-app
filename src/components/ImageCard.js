import React, { Component } from 'react';
import "../styles/ImageList.css";

export default class ImageCard extends Component {

    constructor(props) {
        super(props);
        this.state = { span: 0 }
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height / 10 + 1);
        this.setState({ span })
    }

    render() {
        return (
            <div style={{ gridRowEnd: `span ${this.state.span}` }} >
                <img ref={this.imageRef}
                    alt={this.props.image.description}
                    src={this.props.image.urls.regular}
                    className='image'
                />
            </div>
        )
    }
}
