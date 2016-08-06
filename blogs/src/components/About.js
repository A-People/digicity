import React from 'react'
import axios from 'axios'
import UserInfo from './user/UserInfo'
import Repos from './user/Repos'
import isEmpty from 'lodash/fp/isEmpty'
import github from './utils/github'
import CircularProgress from 'material-ui/CircularProgress'

class About extends React.Component {
  constructor() {
    super()
    this.state = {
      user:{},
    }
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
  render () {
    const styles={
      root:{
        textAlign:'center',
        height:'100vh',
        background:`url(https://raw.githubusercontent.com/A-People/digicity/master/blogs/src/images/3.jpg) center center`
      },
      title:{
        color:'#fff',
        margin:'30px'
      }
    }
    let GitHubInfo
    if(!isEmpty(this.state.user)){
      GitHubInfo = (
        <div>
          <UserInfo userInfo={this.state.user} />
          {/*<Repos repos={this.state.repos} />*/}
        </div>
      )
    }else{
      GitHubInfo=(
         <CircularProgress size={1} style={{marginTop:'100px'}} color='#fff'/>
      )
    }
    return(
      <div　style={styles.root}>
        <div style={{display:'table'}}></div>
        <h1 style={styles.title}>About</h1>
        {GitHubInfo}
      </div>
    )
  }
}

export default About;
