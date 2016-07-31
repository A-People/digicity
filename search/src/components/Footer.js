import React from 'react'
import Bridge from './Bridge'

class Footer extends React.Component {
  render () {
    let styles={
      root:{
        height:'300px',
        backgroundColor:'#212121'
      }
    }
    return(
      <div style={styles.root}>
        Footer
      </div>
    )
  }
}

export default Footer
