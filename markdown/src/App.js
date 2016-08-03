import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import highlight from 'highlight.js'
import marked from 'marked'
import './default.css'

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return highlight.highlightAuto(code).value;
      }
    })
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:marked('```js\n console.log(); \n```')}}/>
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
