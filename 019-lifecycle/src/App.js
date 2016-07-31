import React from 'react'
import Mydemo from './Mydemo'
import MyDemo1 from './MyDemo1'
import Destroy from './Destroy'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      num:1,
      des:false
    }
    this.interval = setInterval(this.change.bind(this), 1000)
  }
  change(){
    this.setState({
      num:this.state.num+1
    })
  }
  render(){
    return(
      <div>
        <Mydemo num={this.state.num}/>
        <MyDemo1/>
        <Destroy/>
      </div>
    )
  }
}


export default App
