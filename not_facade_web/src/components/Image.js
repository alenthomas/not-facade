import React from 'react'
import PropTypes from 'prop-types'

import 'font-awesome/css/font-awesome.min.css'
import './Image.css'

class Image extends React.Component {
  constructor (props) {
    super(props)
    this.state = { fav: false }
    this.toggleFav = this.toggleFav.bind(this)
  }

  toggleFav () {
    this.setState({ fav: !this.state.fav })
  }

  render () {
    return (
      <div className='ind-image'>
        <img src={this.props.imgSrc} alt={this.props.imgId} />
        <span onClick={this.toggleFav}>
          <i className={this.state.fav ? 'fa fa-heart fa-4x' : 'fa fa-heart-o fa-4x'}></i>
        </span>
      </div >
    )
  }
}

Image.propTypes = {
  imgId: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
}
export default Image
