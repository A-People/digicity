import React from 'react'
import axios from 'axios'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      md:(<div></div>)
    }
  }
  componentDidMount(){
    let md
    axios.get(`https://raw.githubusercontent.com/A-People/digicity/master/_public-resourse/${this.props.params.title}.md`)
    .then((res)=>{
      this.setState({
        md:res.data
      })
    })
  }
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
      <div style={styles.root}>
        {this.state.md}
      </div>
    )
  }
}

export default Post
