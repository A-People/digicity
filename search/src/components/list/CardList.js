import React from 'react'
import Card from './Card'
import map from 'lodash/fp/map'

// console.log(map((c)=>{
//   return(c+'222')
// },['asd','zxc']))

let arrData=[
  {title:'ASDXC',date:'2016.01.01'},
  {title:'VWVQV',date:'2016.01.02'},
  {title:'CVWRQ',date:'2016.01.03'},
  {title:'XCQQWD',date:'2016.01.04'},
  {title:'DQCWDQ',date:'2016.01.05'},
  {title:'XAQSQ',date:'2016.01.06'},
  {title:'XCQEQS',date:'2016.01.07'},
  {title:'XASCQA',date:'2016.01.08'},
  {title:'SQCQCA',date:'2016.01.01'},
  {title:'SQDQESA',date:'2016.01.02'},
  {title:'XCASQ',date:'2016.01.03'},
  {title:'CSCAQW',date:'2016.01.04'},
  {title:'ASCQED',date:'2016.01.05'},
  {title:'SQCQQ',date:'2016.01.06'},
  {title:'CSQCQ',date:'2016.01.07'},
  {title:'XZCQE',date:'2016.01.08'},
  {title:'ASCQX',date:'2016.01.01'},
  {title:'XCQESA',date:'2016.01.02'},
  {title:'CQWQX',date:'2016.01.03'},
  {title:'ASCQSQ',date:'2016.01.04'},
  {title:'你好你好',date:'2016.01.04'},
  {title:'大家好好你好',date:'2016.01.04'},
]

class CardList extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    //var patt1=new RegExp(this.props.searchValue,'i')
    let CardGroup3=[]
    for(let i=0;i<arrData.length;i++){
      // if(patt1.test(arrData[i].title)){
      if(arrData[i].title.toLowerCase().indexOf(this.props.searchValue.toLowerCase())!=-1){ //bad!!!
        CardGroup3.push(<Card {...arrData[i]} key={i} index={i+1}/>)
      }
    }

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
        {CardGroup3}
      </div>
    )
  }
}

export default CardList
