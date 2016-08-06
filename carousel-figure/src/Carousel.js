import React from 'react'
import Pic1 from './images/1.jpg'
import Pic2 from './images/2.jpg'
import Pic3 from './images/3.jpg'
import Pic4 from './images/4.jpg'
import Radium from 'radium'
import Dots from './Dots'

class Carousel extends React.Component {
  constructor(){
    super()
    this.interval=setInterval(this.nextPic.bind(this),1000)
  }
  nextPic(){
    this.setState({
      index:this.state.index<3?this.state.index+1:0
    })
  }
  stop(){
    clearInterval(this.interval)
  }
  continue(){
    this.interval=setInterval(this.nextPic.bind(this),1000)
  }
  onChildChanged(index){
    console.log(index);
    this.setState({
      index:index
    })
  }
  render(){
    let styles={
      root:{
        margin:'20px auto',
        width:'500px',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow:'3px 3px 20px #aaa',
        ':hover':{
          boxShadow:'3px 3px 30px #888'
        }
      },
      inner:{
        width:'2000px',
        marginLeft:(-500)*this.state.index+'px',
        transition:'margin-left 0.5s'
      },
      pic:{
        width:'500px',
        height:'300px',
        float: 'left'
      },
      circles:{
        left:'45%',
        top:'290px',
        position: 'absolute'
      }
    }
    return(
      <div>
        <div style={styles.root} onMouseOver={this.stop.bind(this)} onMouseOut={this.continue.bind(this)}>
          <div style={styles.circles}>
            <Dots callbackParent={this.onChildChanged.bind(this)} activeIndex={this.state.index}/>
          </div>
          <div style={styles.inner}>
            <img style={styles.pic} src={Pic1}/>
            <img style={styles.pic} src={Pic2}/>
            <img style={styles.pic} src={Pic3}/>
            <img style={styles.pic} src={Pic4}/>
          </div>
        </div>
      </div>
    )
  }
}


export default Radium(Carousel)
