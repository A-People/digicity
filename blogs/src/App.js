import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Link } from 'react-router';
import NavBar from './components/NavBar'

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    return(
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
