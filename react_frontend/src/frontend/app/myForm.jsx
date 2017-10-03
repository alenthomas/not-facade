import React from 'react';
import {render} from 'react-dom';

const mySubmit = ()=> {
  let name = document.getElementById("page_name");
  console.log(name.value);

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
