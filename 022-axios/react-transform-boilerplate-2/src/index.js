import React from 'react'
import { render } from 'react-dom'
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './style/main.scss'
injectTapEventPlugin()

render(<App/>, document.getElementById('root'))
