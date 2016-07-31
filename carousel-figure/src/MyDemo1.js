import React from 'react'

class MyDemo1 extends React.Component {
  constructor(){
    super()
    this.state={
      opacity:1
    }
    this.interval=setInterval(this.change.bind(this),100)
  }
  change(){
    this.setState({
      opacity:this.state.opacity>0?this.state.opacity-0.1:1
    })
  }
  render () {
    return(
      <div>
        <div style={this.state}>{this.props.name}</div>
      </div>
    )
  }
}

MyDemo1.defaultProps={
  name:'props'
}

export default MyDemo1;
