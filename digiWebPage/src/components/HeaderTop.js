import React from 'react'
import Search from './Search'

class HeaderTop extends React.Component {
  render () {
    const styles={
      root:{
        height:'117px',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center'
      },
      h1:{

      },
      search:{

      }
    }
    return(
      <div style={styles.root}>
        <h1 style={styles.h1}>第嘉学社</h1>
        <Search style={styles.search}/>
      </div>
    )
  }
}

export default HeaderTop
