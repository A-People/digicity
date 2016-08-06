import React from 'react'
import pic from '../images/5.jpg'

class Blog extends React.Component {
  render () {
    const styles={
      root:{
        textAlign:'center',
        height:'100vh',
        background:`url(${pic}) center center`
      },
      title:{
        color:'#fff',
        margin:'30px'
      }
    }
    return(
      <div　style={styles.root}>
        <div style={{display:'table'}}></div>
        <h1 style={styles.title}>Blog</h1>
      </div>
    )
  }
}

export default Blog;
