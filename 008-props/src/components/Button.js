import React, { Component } from 'react'

class Button extends Component {

  render(){
    let styles={
      btn:{
        padding:'0 30px',
        height:'50px',
        fontSize:'30px',
        backgroundColor:this.props.color,
      }
    }
    return(
      <button style={styles.btn}>{this.props.title}</button>
    )
  }
}

Button.defaultProps={
  title:'click',
  color:'#ccc'
}

Button.propTypes={
  title:React.PropTypes.string.isRequired,
  color:React.PropTypes.string.isRequired
}

export default Button
