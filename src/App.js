import React from 'react';
import './App.css';
import images from './data.js';
import ImageList from './ImageList.js';
// import ImageItem from './ImageItem.js';
import Header from './Header.js';

const options = [
  "unilego",
  "triceratops",
  "narwhal",
  "rhino",
  "unicorn",
  "markhor",
  "addax",
  "mouflon",
  "chameleon",
  "lizard",
  "dragon"
]


class App extends React.Component {
  state = {
    keyword: ''
  }

handleDropDown = (e) => {
  const type = e.target.value;
  this.setState({ keyword: type })
}

render() {
  const filteredImages = images.filter(image => image.keyword === this.state.keyword)
  console.log(this.state);
  return (
      <>
        <Header />
        <ImageList images={filteredImages} />
         
          <select onChange={this.handleDropDown}> 
            {
              options.map(type => <option key={type} value={type}>{type}</option>)
            }
          </select>
      </>
    );
  }
}

export default App;

// App.js imports the horned creatures data and passes it to ImageList.js (stretch goal) 
// 1. Make list of images with captions, names, etc. using the data array
// 2. then you're adding a dropdown to let you filter the images by their keyword

