import React from 'react';
import axios from 'axios'

class App extends React.Component {

  componentDidMount(){
    const username='a-people'
    console.log(this);
    
    axios.get(`https://api.github.com/users/${this.username}`)
      .then(function (response) {
        console.log(this);
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  render () {
    return(
      <div>

      </div>
    )
  }
}

export default App
