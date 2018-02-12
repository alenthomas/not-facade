import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Image from './Image'
import { actionFetchImages, actionFetchMoreImages } from '../actions'

const SCROLL_LIMIT = 780

class ImageScroll extends React.Component {
  constructor (props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll (docum) {
    let scroll = document.getElementsByClassName('image-scroll')[0]
    let divHeight = scroll.clientHeight
    let currentScroll = window.scrollY
    if (divHeight - currentScroll < SCROLL_LIMIT) {
      this.props.fetchMore()
    }
  }

  componentDidMount () {
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.pgName.length !== 0 && this.props.pgName !== nextProps.pgName) {
      this.props.fetchInitial()
    }
  }

  imageElements () {
    if (this.props.images.length > 0) {
      return this.props.images.map((imgObj) => <Image key={imgObj.imgId} imgId={imgObj.imgId} imgSrc={imgObj.imgSrc} />)
    }
    return ''
  }

  render () {
    return (
      <div>
        <h4 className='page-name'>{this.props.pgName}</h4>
        <div className='image-scroll'>
          {this.imageElements()}
        </div>
      </div>
    )
  }
}

ImageScroll.propTypes = {
  pgName: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    imgId: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
  }).isRequired
  ).isRequired,
  fetchMore: PropTypes.func.isRequired,
  fetchInitial: PropTypes.func.isRequired
}

const mapScrollStateToProps = (state) => {
  return {
    pgName: state.page.pgName,
    images: state.images
  }
}

const mapScrollDispatchToProps = (dispatch) => {
  return {
    fetchMore: () => { dispatch(actionFetchMoreImages()) },
    fetchInitial: () => { dispatch(actionFetchImages()) }
  }
}

export default connect(mapScrollStateToProps, mapScrollDispatchToProps)(ImageScroll)
