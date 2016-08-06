import React, { PropTypes } from 'react'
import pic from '../images/4.jpg'

class Home extends React.Component {
  render () {
    let styles={
      root:{
        background: `url(${pic}) no-repeat fixed center center/cover`,
        display:'flex',
        flexDirection:'column',
        textAlign:'center'
      },
      title:{
        color:'#fff',
        height:'100vh',
      },
      box:{
        height:'100vh',
        backgroundColor:'#fff'
      },
      footer:{
        height:'100px',
        backgroundColor:'#333'
      }
    }
    return(
      <div style={styles.root}>
        <h1 style={styles.title}>欢迎光临</h1>
        <div style={styles.box}>

        </div>
        <div style={styles.footer}>

        </div>
      </div>
    )
  }
}

export default Home;
