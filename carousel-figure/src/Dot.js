import React from 'react'
import Radium from 'radium'

class Dot extends React.Component {
  constructor(){
    super()
    this.state={
      isIn:false
    }
  }
  in(){
    this.setState({
      isIn:true
    })
    this.props.callbackParent(this.props.index)
  }
  out(){
    this.setState({
      isIn:false
    })
    this.props.callbackParent(this.props.index)
  }
  render(){
    let styles={
      root:{
        width:'16px',
        height:'16px',
        borderRadius:'8px',
        backgroundColor:'#fff',
        float: 'left',
        marginLeft:'8px',
        ':hover':{
          backgroundColor:'red',
        }
      }
    }
    return(
      <div style={styles.root} onMouseOver={this.in.bind(this)} onMouseOut={this.out.bind(this)}>

      </div>
    )
  }
}

export default Radium(Dot)
