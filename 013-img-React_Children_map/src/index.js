import React from 'react'
import { render } from 'react-dom'
import App from './App'

class MyApp extends React.Component{
  render(){
    return(
      <div>
        <App>
          <h1>ABCDEFGHIKLMNOPQRSTUVWXYZ</h1>
          <h2>ABCDEFGHIKLMNOPQRSTUVWXYZ</h2>
          <h3>ABCDEFGHIKLMNOPQRSTUVWXYZ</h3>
          <h4>ABCDEFGHIKLMNOPQRSTUVWXYZ</h4>
        </App>
      </div>
    )
  }
}

render(<MyApp/>,document.getElementById('root'))
