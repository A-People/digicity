import React from 'react'

class Destroy extends React.Component {
  constructor(props){
    super(props)
    console.log('init')
  }
  componentWillMount(){
    console.log('WillMount')
  }
  componentDidMount(){
    console.log('DidMount')
  }
  componentWillReceiveProps(nextProps){
    console.log('WillReceiveProps');
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('should');
    return true
  }
  componentWillUpdate(nextProps,nextState){
    console.log('WillUpdate');
  }
  componentDidUpdate(prevProps,prevState){
    console.log('DidUpdate');
  }
  render () {
    console.log('render');
    if(this.props.destroy)return false
    return(
      <div style={{width:'50px',height:'50px',backgroundColor:'#ccc'}}></div>
    )
  }
}

export default Destroy;
