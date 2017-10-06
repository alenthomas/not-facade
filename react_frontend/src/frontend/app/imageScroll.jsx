import React from 'react';
import {render} from 'react-dom';

import IndImage from './indImage.jsx';

const SCROLL_LIMIT = 780;

class ImageScroll extends React.Component {

  constructor(props) {
    super(props);
  }

  handleScroll(docum) {
    let scroll = document.getElementsByClassName('image-scroll')[0];
    let divHeight = scroll.clientHeight;
    let currentScroll = window.scrollY;
//    console.log(divHeight, currentScroll);
    if(divHeight - currentScroll < SCROLL_LIMIT) {
      this.props.onScrollEvent();
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll.bind(this));
    }

  imageElements() {
    if (this.props.ids)
     return this.props.ids.map((i) => <IndImage key={i} imgId={i}/>);
    return null;
  }


  render() {
    const imageElements = this.imageElements();
    return (
      <div className="image-scroll">
        {imageElements}
      </div>
    );
  }
}

module.exports = ImageScroll;
