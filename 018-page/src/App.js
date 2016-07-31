import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render(){
    let styles={
      root:{

      }
    }
    return(
      <div style={styles.root}>
        <Header/>
        <Section/>
        <Footer/>
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
}

export default App
