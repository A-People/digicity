import React, { PropTypes } from 'react'
import highlight from 'highlight.js'
import marked from 'marked'
import 'highlight.js/styles/default.css'
import axios from 'axios'

class GetMarkdowm extends React.Component {
  constructor(){
    super()
    this.state={
      md:''
    }
  }
  componentDidMount(){
    axios.get(`https://raw.githubusercontent.com/A-People/digicity/master/blogs/_public-resourse/a.md`)
      .then((res)=>{
        this.setState({
          md:res.data
        })
      })
      .catch(function (error) {
        console.log(error);
      })
    marked.setOptions({
      highlight: function (code) {
        return highlight.highlightAuto(code).value;
      }
    })
  }
  render () {
    return(
      <div dangerouslySetInnerHTML={{__html:marked(this.state.md)}}/>
    )
  }
}

export default GetMarkdowm
