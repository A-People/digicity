import React , { Component } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'
import UserInfo from './user/UserInfo'
import Repos from './user/Repos'
import isEmpty from 'lodash/lang/isEmpty'
import github from './utils/github'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user:{},
    }
  }
  getChildContext() {
    return {muiTheme: getMuiTheme()}
  }
  handleSubmit(e){
    e.preventDefault()
    const username=this.refs.username.getValue()
    github.getGithubInfo(username)
          .then((res)=>{
            this.setState({
              user: res.user,
              repos: res.repos
            })
          })
  }
  componentDidMount(){
    github.getGithubInfo('a-people')
          .then((res)=>{
            this.setState({
              user: res.user,
              repos: res.repos
            })
          })
  }

  render(){
    const styles={
      root:{
        textAlign:'center',
      }
    }

    let GitHubInfo
    if(!isEmpty(this.state.user)) {
      GitHubInfo = (
        <div>
          <UserInfo userInfo={this.state.user} />
          <Repos repos={this.state.repos} />
          <RaisedButton
            style={{display: 'block', margin: '0 auto', width: '180px'}}
            primary={true}
            label="save" />
        </div>
      )
    }
    return(
      <div style={styles.root}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField hintText='Github Username' ref='username'/>
          <RaisedButton label="Submit" type='submit' primary={true} />
        </form>
        {GitHubInfo}
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
}
export default App
