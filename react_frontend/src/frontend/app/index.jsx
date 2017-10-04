import React from 'react';
import {render} from 'react-dom';

import Header from './header.jsx';
import MyForm from './myForm.jsx';

import helpers from './urlHelpers.js';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  getImages(jsonObj) {
    console.log("in index", jsonObj['data']);
  }

  getAlbum(jsonObj) {
    helpers.get(['/images', jsonObj['id']].join('/'), this.getImages.bind(this));
  }

  render() {
    return (
      <div className="homepage">
        <Header/>
        <MyForm getAlbum={this.getAlbum.bind(this)}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
