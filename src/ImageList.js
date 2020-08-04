import React from 'react';
import ImageItem from './ImageItem.js';


class ImageList extends React.Component {
    render() {
        return (
            <div> 
            {
                this.props.images.map((image) => <ImageItem key={image} image={image} />)
            }
            </div>
        )
    }
}

export default ImageList;

/* children imageItem should go here ImageList.js */
/* Map over this.props.images and create/render and ImageItem for each image in the array. */

