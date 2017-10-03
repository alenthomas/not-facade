import React from 'react';
import {render} from 'react-dom';

import get from './urlHelpers.js';

const mySubmit = ()=> {
  let name = document.getElementById("page_name");
  console.log("page_name_input: ", name.value);
  get(['/page', name.value].join('/'));

};

class MyForm extends React.Component {
  render() {
    return (
      <div className="form">
        <label>Enter a FB page name (as specified in FB uri):</label>
        <input id="page_name" type="text" name="page_name"/>
        <input type="submit" value="Enter" onClick={mySubmit} />
      </div>
    );
  }
}

module.exports = MyForm;
