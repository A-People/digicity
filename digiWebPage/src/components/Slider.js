import React from 'react'
import Banner from '../images/banner.png'

class Slider extends React.Component {
  render () {
    const styles={
      banner:{
        width:'100%'
      }
    }
    return(
      <div>
        <img style={styles.banner} src={Banner}/>
      </div>
    )
  }
}

export default Slider
