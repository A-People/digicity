import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import GetMarkdowm from './GetMarkdowm'

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {

    return(
      <div>
        <GetMarkdowm/>
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
