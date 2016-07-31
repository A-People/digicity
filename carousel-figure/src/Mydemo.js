import React from 'react'

class Mydemo extends React.Component {
  constructor(props){
    super(props)
    this.state={
      num:1
    }
    this.interval = setInterval(this.change.bind(this), 1000)
    //console.log('init')
  }
  componentWillMount(){
    //console.log('Will')
  }
  componentDidMount(){
    //console.log('Did')
  }
  componentWillReceiveProps(nextProps){
    //console.log('WillReceiveProps');
    //console.log(nextProps);
  }
  shouldComponentUpdate(nextProps,nextState){
    //console.log(nextProps,nextState);
    //console.log('should');
    return true
  }
  componentWillUpdate(nextProps,nextState){
    //console.log(nextProps,nextState);
    //console.log('WillUpdate');
  }
  componentDidUpdate(prevProps,prevState){
    //console.log('DidUpdate');
  }
  change(){
    this.setState({
      num:this.state.num+1
    })
  }

  render(){
    //console.log('render')
    return(
      <div>
        <div>{this.props.num}+{this.state.num}</div>
      </div>
    )
  }
}

Mydemo.defaultProps={
  num:1
}

export default Mydemo
