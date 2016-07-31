import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Card from './components/Card'
import CardGroup from './components/CardGroup'


class App extends Component {

  render(){
    let　btnProps={
      title:'outside',
      color:'green'
    }
    let　btnProps2={
      title:'many',
      color:'gold',
    }
    let btns=[
      <Button key='1'/>,<Button key='2'/>,<Button key='3'/>,<Button key='4'/>
    ]
    let cardsProps=[
      {title:'aaa',date:"2016.01.01"},
      {title:'bbb',date:"2016.01.02"},
      {title:'ccc',date:"2016.01.03"},
      {title:'ddd',date:"2016.01.04"},
      {},
      {title:'eee',date:"2016.01.05"},
    ]
    let cards=[]
    for(let i=0;i<cardsProps.length;i++){
      cards.push(<Card {...cardsProps[i]} num={i+1} key={i}/>)
    }
    return(
      <div>
        <p>hello {this.props.name} {this.props.where} world</p>
        <Button title='anything' color='none'/>
        <Button color={5}/>
        <Button title={true}/>
        <Button title={btnProps.title} color={btnProps.color}/>
        <Button {...btnProps2}/>
        {btns}
        <Card title='asdasd' date="2016"/>
        {cards}
        <CardGroup/>
      </div>
    )
  }
}

ReactDOM.render(<App name='asd' where='china'/>,document.getElementById('app'));
