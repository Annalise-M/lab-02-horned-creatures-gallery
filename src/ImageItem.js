import React from 'react';
//import styles here

class ImageItem extends React.Component {
    render() {
        return ( 
            <div>
                <img alt="random" key={this.props.image.title} src={this.props.image.url} />
            </div>
        )
    }
}

export default ImageItem;

