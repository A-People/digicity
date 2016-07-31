import React, { Component } from 'react'
import Card from './Card'

let msg=[
  {title:'qwe',date:'2016.06.01'},
  {},
  {title:'asd',date:'2016.06.02'},
  {title:'zxc',date:'2016.06.03'},
]
class CardGroup extends Component {
  render () {
    let group=[]
    for(let i=0;i<msg.length;i++){
      group.push(<Card {...msg[i]} key={i+100} num={i+100}/>)
    }
    return(
      <div>
        {group}
      </div>
    )
  }
}

export default CardGroup;
