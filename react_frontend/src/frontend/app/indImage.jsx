import React from 'react';
import {render} from 'react-dom';

import helpers from './urlHelpers.js';

class IndImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {link: "/static/loading.svg", fav: false};
  }

  returnLink (jsonObj) {
    this.setState({link: jsonObj['src']});
  }

  getImageLink(imgId) {
    helpers.get(['/image', imgId].join('/'), this.returnLink.bind(this));
  }

  componentDidMount() {
    this.getImageLink(this.props.imgId);
  }

  toggleCrap () {
    this.setState(Object.assign(this.state, {fav: !this.state.fav}));
  }

  fav () {
    if (this.state.fav)
     return "/static/crapped.svg";
    return "/static/uncrapped.svg";
  }

  render() {
    let favlink = this.fav();
    return(
      <div className="ind-image">
        <img src={this.state.link}/>
        <img src={favlink} onClick={this.toggleCrap.bind(this)}/>
      </div>
    );
  }
}

module.exports = IndImage;
