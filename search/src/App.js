import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      value: '',
    }
  }
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  onChildChanged(value){
    this.setState({
      value: value,
    })
  }
  render(){
    let styles={
      root:{

      }
    }
    return(
      <div style={styles.root}>
        <Header callBackParent={this.onChildChanged.bind(this)}/>
        <Section searchValue={this.state.value}/>
        <Footer/>
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
}

export default App
