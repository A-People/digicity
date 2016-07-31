import React from 'react'

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
