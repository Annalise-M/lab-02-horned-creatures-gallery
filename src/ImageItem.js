import React from 'react';
//import styles here

class ImageItem extends React.Component {
    render() {
        return ( 
            <div>
                <img src={this.props.image} alt={this.props.title} />
            </div>
        )
    }
}

export default ImageItem;
