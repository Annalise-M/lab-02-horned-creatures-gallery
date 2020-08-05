import React, { Component } from 'react'
import images from './data.js';
import ImageList from './ImageList.js';

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

class Header extends Component {
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
            <div>
                <header> Horned Creatures! </header>
                <select onChange={this.handleDropDown}> 
            {
                options.map(type => <option key={type} value={type}>{type}</option>)
            }
                </select>
            <ImageList images={filteredImages} />
            </div>
            </>
        )
    }
}

export default Header;

