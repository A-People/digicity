import React, { PropTypes } from 'react'
import pic from '../images/4.jpg'

class Home extends React.Component {
  render () {
    let styles={
      root:{
        width:'100vw',
        height:'100vh',
        background: `url(${pic}) no-repeat fixed center center/cover`
      },
      title:{
        color:'#fff',
        textAlign:'center',
        margin:'30px'
      }
    }
    return(
      <div style={styles.root}>
        <div style={{display:'table'}}></div>
        <h1 style={styles.title}>欢迎光临</h1>
        <div></div>
      </div>
    )
  }
}

export default Home;
