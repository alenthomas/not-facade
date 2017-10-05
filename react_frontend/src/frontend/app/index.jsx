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
    this.state = {
      data: [],
      albumId: null,
      afterCursor: null
    };
  }

  getImageIds(jsonObj) {
    console.log(this.state);
    this.setState(Object.assign({}, this.state, {data: this.state.data.concat(jsonObj['data']), afterCursor: jsonObj['paging']['cursors']['after']}));
    console.log(this.state);
  }

  getAlbum(jsonObj) {
    this.state['albumId'] = jsonObj['id'];
    helpers.get(['/images', jsonObj['id']].join('/'), this.getImageIds.bind(this));
  }

  updateOnScroll() {
    console.log("in updateOnScroll");
    console.log(this);
    helpers.get('/images/' + this.state.albumId + '?afterCursor=' + this.state.afterCursor, this.getImageIds.bind(this));
  }

  render() {
    return (
      <div className="container">
        <Header />
        <MyForm getAlbum={this.getAlbum.bind(this)} />
        <ImageScroll ids={this.state.data} onScrollEvent={this.updateOnScroll.bind(this)} />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
