import React from 'react';
import {render} from 'react-dom';

class ImageScroll extends React.Component {

  constructor(props) {
    super(props);
  }

  imageElement() {
    return (<div className="ind-img">
            <img src="https://68.media.tumblr.com/avatar_2920f2be9159_128.png"/>
            </div>);
  }
  render() {
    return (
      <div className="image-scroll">
        {this.imageElement()}
      </div>
    );
  }
}

module.exports = ImageScroll;
