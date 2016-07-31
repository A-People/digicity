import React, { Component } from 'react'

class Card extends Component{
  render(){
    let styles={
      root:{
        width:'80%',
        height:'80px',
        border:'1px solid #555',
        margin:'10px auto',
        display:'block',
        textDecoration: 'none',
        color:'#000',
        textAlign:'center'
      },
      left:{
        width:'80px',
        height:'80px',
        backgroundColor:"blue",
        float:'left',
        color:'#fff',
        fontSize:'35px',
        lineHeight:'80px'
      },
      word:{
        margin:'0'
      }
    }
    return(
      <a href='#' style={styles.root}>
        <div style={styles.left}>{this.props.num}</div>
        <div>
          <h1 style={styles.word}>{this.props.title}</h1>
          <p style={styles.word}>{this.props.date}</p>
        </div>
      </a>
    )
  }
}

Card.defaultProps={
  title:'set your TITLE',
  date:'set your DATE'
}

Card.propTypes={
  title:React.PropTypes.string.isRequired,
  date:React.PropTypes.string.isRequired
}

export default Card
