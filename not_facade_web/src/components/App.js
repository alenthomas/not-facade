import React from 'react'

import Header from './Header'
import MyForm from './Form'
import ImageScroll from './ImageScroll'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <MyForm />
        <ImageScroll />
      </div>
    )
  }
}

export default App
