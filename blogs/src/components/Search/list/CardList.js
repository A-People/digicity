import React from 'react'
import Card from './Card'
import map from 'lodash/fp/map'

let arrData=[
  {title:'ASDXC',date:'2016.01.01'},
  {title:'VWVQV',date:'2016.01.02'},
  {title:'CVWRQ',date:'2016.01.03'},
  {title:'XCQQWD',date:'2016.01.04'},
  {title:'DQCWDQ',date:'2016.01.05'},
  {title:'XAQSQ',date:'2016.01.06'},
  {title:'XCQEQS',date:'2016.01.07'},
  {title:'你好你好',date:'2016.01.04'},
  {title:'大家好好你好',date:'2016.01.04'},
]

class CardList extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    // let CardGroup3=[]
    // for(let i=0;i<arrData.length;i++){
    //   if(arrData[i].title.toLowerCase().indexOf(this.props.searchValue.toLowerCase())!=-1){ //bad!!!
    //     CardGroup3.push(<Card {...arrData[i]} key={i} index={i+1}/>)
    //   }
    // }

    let CardGroup=arrData.map(function(item,index){
      return(
        <Card {...item} key={index} index={index+1}/>
      )
    })
    let i=0
    let CardGroup2=map((item)=>{
      i++
      return(
        <Card {...item} key={i} index={i}/>
      )
    },arrData)

    return(
      <div>
        {CardGroup}
      </div>
    )
  }
}

export default CardList
