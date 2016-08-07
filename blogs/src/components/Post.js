import React from 'react'

class Post extends React.Component {
  render () {
    const styles={
      root:{
        textAlign:'center',
        height:'100vh',
        color:'#fff',
        fontSize:'50px',
        background:`url(https://raw.githubusercontent.com/A-People/digicity/master/blogs/src/images/5.jpg) center center`
      }
    }
    return(
      axios.get('')
            .then((res)=>{
              
            })
      <div style={styles.root}>
        {this.props.params.title}
      </div>
    )
  }
}

export default Post
