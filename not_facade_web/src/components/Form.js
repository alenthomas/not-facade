import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actionFetchPage } from '../actions'

class MyForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { inputVal: '' }
    this.handleInput = this.handleInput.bind(this)
    this.mySubmit = this.mySubmit.bind(this)
  }

  handleInput (e) {
    this.setState({ inputVal: e.target.value })
  }

  mySubmit (e) {
    e.preventDefault()
    this.props.fetchPage(this.state.inputVal)
  }

  render () {
    return (
      <form className='form' onSubmit={this.mySubmit}>
        <label>Enter a FB page name (as specified in FB uri):</label>
        <input type='text' name='page_name' value={this.state.inputVal} onChange={this.handleInput} />
        <input className='button' type='submit' value='Enter' />
      </form>
    )
  }
}

MyForm.propTypes = {
  fetchPage: PropTypes.func.isRequired
}

const mapFormStateToProps = (state) => {
  return {}
}
const mapFormDispatchToProps = (dispatch) => {
  return {
    fetchPage: (pageName) => { dispatch(actionFetchPage(pageName)) }
  }
}

export default connect(mapFormStateToProps, mapFormDispatchToProps)(MyForm)
