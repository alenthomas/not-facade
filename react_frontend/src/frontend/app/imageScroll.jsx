import React from 'react';
import {render} from 'react-dom';

import IndImage from './indImage.jsx';

class ImageScroll extends React.Component {

  constructor(props) {
    super(props);
  }

  imageElements() {
    if (this.props.ids)
     return this.props.ids.map((i) => <IndImage key={i} imgId={i}/>);
    return null;
  }

  render() {
    const imageElements = this.imageElements();
    return (<div className="image-scroll">{imageElements}</div>);
  }
}

module.exports = ImageScroll;
