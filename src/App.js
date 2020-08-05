import React from 'react';
import './App.css';
// import images from './data.js';
// import ImageList from './ImageList.js';
import Header from './Header.js';

// const options = [
//   "unilego",
//   "triceratops",
//   "narwhal",
//   "rhino",
//   "unicorn",
//   "markhor",
//   "addax",
//   "mouflon",
//   "chameleon",
//   "lizard",
//   "dragon"
// ]

class App extends React.Component {
  // state = {
  //   keyword: ''
  // }

// handleDropDown = (e) => {
//   const type = e.target.value;
//   this.setState({ keyword: type })
// }

render() {
  // const filteredImages = images.filter(image => image.keyword === this.state.keyword)
  // console.log(this.state);
  return (
      <>
        <Header />
        {/* <ImageList images={filteredImages} /> */}
          {/* <select onChange={this.handleDropDown}> 
            {
              options.map(type => <option key={type} value={type}>{type}</option>)
            }
          </select> */}
      </>
    );
  }
}

export default App;

