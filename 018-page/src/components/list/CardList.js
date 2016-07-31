import React from 'react'

import Card from './Card'

import map from 'lodash/fp/map'

console.log(map((c)=>{
  return(c+'222')
},['asd','zxc']))

let arrData=[
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},
  {title:'AAAAA',date:'2016.01.01'},
  {title:'BBBBB',date:'2016.01.02'},
  {title:'CCCCC',date:'2016.01.03'},
  {title:'DDDDD',date:'2016.01.04'},
  {title:'EEEEE',date:'2016.01.05'},
  {title:'FFFFF',date:'2016.01.06'},
  {title:'GGGGG',date:'2016.01.07'},
  {title:'HHHHH',date:'2016.01.08'},

]

class CardList extends React.Component {
  render () {
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
