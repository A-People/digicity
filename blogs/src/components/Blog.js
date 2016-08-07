import React from 'react'
import SearchIndex from './Search/SearchIndex'

class Blog extends React.Component {
  render () {
    const styles={
      root:{
        textAlign:'center',
        height:'100vh',
        overflow: 'auto',
        //background:`url(https://raw.githubusercontent.com/A-People/digicity/master/blogs/src/images/5.jpg) center center`
        background:`url(http://4493bz.1985t.com/uploads/allimg/141014/3-141014104948.jpg) center center`
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
        <SearchIndex/>
      </div>
    )
  }
}

export default Blog;
