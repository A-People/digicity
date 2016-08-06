import React from 'react'
import HeaderTop from './components/HeaderTop'
import Nav from './components/Nav'
import Slider from './components/Slider'

class Header extends React.Component {
  render () {
    return(
      <div>
        <HeaderTop/>
        <Nav/>
        <Slider/>
      </div>
    )
  }
}

export default Header
