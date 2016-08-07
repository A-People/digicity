import React from 'react'
import axios from 'axios'
import highlight from 'highlight.js'
import marked from 'marked'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      md:null
    }
    this.getMD(this.props)
  }
  getMD(nextProps){
    axios.get(`https://raw.githubusercontent.com/A-People/digicity/master/blogs/_public-resourse/${nextProps.params.title}.md?v=${Math.random()}`)
    .then((res)=>{
      this.setState({
        md:res.data
      })
    })
  }
  componentDidMount(){
    marked.setOptions({
      highlight: function (code) {
        return highlight.highlightAuto(code).value;
      }
    })
  }
  componentWillReceiveProps(nextProps){
    this.getMD(nextProps)
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
      <div style={styles.root} dangerouslySetInnerHTML={{__html:marked(this.state.md)}}>
      </div>
    )
  }
}

export default Post
