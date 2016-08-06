import React from 'react'
//import Search from './Search'
import Radium from 'radium'

class Nav extends React.Component {
  render () {
    const styles={
      root:{
        height:'52px',
        backgroundColor:'#333',
        display:'flex',
        justifyContent:'space-around',
        padding:'0 8%',

      },
      a:{
        margin:0,
        color:'#fff',
        fontSize:'18px',
        padding:'0 10px',
        lineHeight:'52px',
        fontWeight:'normal',
        textDecoration: 'none',
        ':hover':{
          backgroundColor:'#aaa'
        }
      }
    }
    return(
      <div style={styles.root}>
        <a href='#' style={styles.a} key='1'>热门课程</a>
        <a href='#' style={styles.a} key='2'>专业技能</a>
        <a href='#' style={styles.a} key='3'>师资力量</a>
        <a href='#' style={styles.a} key='4'>课程设置</a>
        <a href='#' style={styles.a} key='5'>项目实训</a>
        <a href='#' style={styles.a} key='6'>明星学员</a>
        <a href='#' style={styles.a} key='7'>学院作品</a>
      </div>
    )
  }
}

export default Radium(Nav)
