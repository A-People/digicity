import React from 'react'
import Dot from './Dot'

let DotGroup=[]

class Circles extends React.Component {
  constructor(){
    super()
    for(let i=0;i<4;i++){
      DotGroup.push(<Dot key={i} index={i} callbackParent={this.onChildChanged.bind(this)}/>)
    }
  }
  onChildChanged(index){
    this.props.callbackParent(index)
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.activeIndex);
    //DotGroup[nextProps.activeIndexs].props.active=true
  }
  render(){
    let styles={
      root:{

      }
    }
    return(
      <div style={styles.root}>
        <div style={{clear:'both'}}></div>
        {DotGroup}
        <div style={{clear:'both'}}></div>
      </div>
    )
  }
}


export default Circles
