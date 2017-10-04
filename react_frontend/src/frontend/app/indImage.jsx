import React from 'react';
import {render} from 'react-dom';

import helpers from './urlHelpers.js';

class IndImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {link: null};
  }

  returnLink (jsonObj) {
    this.setState({link: jsonObj['src']});
  }

  getImageLink(imgId) {
    helpers.get(['/image', imgId].join('/'), this.returnLink.bind(this));
  }

  render() {
    return(
      <div className="ind-image">
        <img src={this.state.link}/>
      </div>
    );
  }
}

module.exports = IndImage;
