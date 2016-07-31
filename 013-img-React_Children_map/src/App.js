import React from 'react'

import Bgi from './images/a.jpg'
import Pic from './images/b.jpg'

class App extends React.Component {
  render(){
    let styles={
      root:{
        backgroundColor:'#ccc',
        backgroundImage:'url(' + Bgi + ')'
      }
    }
    return(
      <div style={styles.root}>
        <img src={Pic} style={{width:'150px'}}/>
        <div style={{display:'table'}}></div>
        <ol>
          {
            React.Children.map(this.props.children,function(item){
              return <li>{item}</li>
            })
          }
        </ol>
        {this.props.children}
      </div>
    )
  }
}

export default App
