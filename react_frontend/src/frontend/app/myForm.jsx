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

  pageExists() {
    if (this.state.pageName)
     return <h4 className="page-name">{this.state.pageName}</h4>;
    return null;
  }
  render() {
    const welcome = this.pageExists();
    return (
      <div className="form">
        <label>Enter a FB page name (as specified in FB uri):</label>
        <input id="page_name" type="text" name="page_name"/>
        <input className="button" type="submit" value="Enter" onClick={this.mySubmit.bind(this)} />
        {welcome}
      </div>
    );
  }
}

module.exports = MyForm;
