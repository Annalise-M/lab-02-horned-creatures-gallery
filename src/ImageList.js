import React from 'react';
import ImageItem from './ImageItem.js';


class ImageList extends React.Component {
    render() {
        const imageArray = this.props.images;
        // console.log(imageArray);
        return (
            <div>
                   {imageArray.map((image) => {
                       return <ImageItem key={this.props.title} image={image} />
                   })}
            </div>
        )
    }
}

export default ImageList;

/* children imageItem should go here ImageList.js */
/* Map over this.props.images and create/render and ImageItem for each image in the array. */

