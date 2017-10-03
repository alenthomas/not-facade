import React from 'react';
import {render} from 'react-dom';

import Header from './header.jsx';
import MyForm from './myForm.jsx';


class App extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Header/>
        <MyForm/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
