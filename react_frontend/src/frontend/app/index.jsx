import React from 'react';
import {render} from 'react-dom';

import Header from './header.jsx';
import MyForm from './myForm.jsx';
import ImageScroll from './imageScroll.jsx';
import IndImage from './indImage.jsx';

import helpers from './urlHelpers.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  getImageIds(jsonObj) {
    console.log("in index", jsonObj['data']);
    this.setState({data: jsonObj['data']});
  }

  getAlbum(jsonObj) {
    helpers.get(['/images', jsonObj['id']].join('/'), this.getImageIds.bind(this));
  }

  render() {
    return (
      <div className="container">
        <Header />
        <MyForm getAlbum={this.getAlbum.bind(this)} />
        <ImageScroll ids={this.state.data} />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
