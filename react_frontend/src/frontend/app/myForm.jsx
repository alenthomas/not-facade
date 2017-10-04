import React from 'react';
import {render} from 'react-dom';

import helpers from './urlHelpers.js';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pageName: null};
  }

  getPage(jsonObj) {
    this.setState(() => ({
      pageName: jsonObj['name']
    }));
    helpers.get(['/albums', jsonObj['id']].join('/'), this.props.getAlbum);
  }

  mySubmit () {
    let name = document.getElementById("page_name");
    helpers.get(['/page', name.value].join('/'), this.getPage.bind(this));
  };

  render() {
    return (
      <div className="form">
        <h1>Welcome to {this.state.pageName}</h1>
        <label>Enter a FB page name (as specified in FB uri):</label>
        <input id="page_name" type="text" name="page_name"/>
        <input type="submit" value="Enter" onClick={this.mySubmit.bind(this)} />
      </div>
    );
  }
}

module.exports = MyForm;
