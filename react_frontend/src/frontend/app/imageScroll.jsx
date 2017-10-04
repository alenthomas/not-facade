import React from 'react';
import {render} from 'react-dom';

import IndImage from './indImage.jsx';

class ImageScroll extends React.Component {

  constructor(props) {
    super(props);
  }

  imageElements() {
    if (this.props.ids)
     return this.props.ids.map((i) => <IndImage imgId={i}/>);
    return null;
  }

  render() {
    const val = this.imageElements();
    return (<div className="img-scroll">
            {val}
            </div>);
  }
}

module.exports = ImageScroll;
