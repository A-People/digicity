import React from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {hashHistory} from 'react-router'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title:''
    }
  }
  handleToggle(){
    this.setState({open: !this.state.open})
  }

  handleClose(){this.setState({open: false});}

  setNavState(){
    this.setState({
      title:this.context.router.isActive('/', true) ? 'HOME' :
        this.context.router.isActive('/blog')? 'BLOG' :
        this.context.router.isActive('/about')? 'ABOUT' : 'HOME'
    });
  }
  componentWillReceiveProps() {
    this.setNavState()
  }
  componentDidMount(){
    this.setNavState()
  }

  render () {
    let styles={
      root:{
        position:'absolute'
      },
      icon:{
        fontSize:'28px',
        margin:'10px',
        color:'#fff',
        cursor: 'pointer'
      },
      h2:{
        backgroundColor:'#00BCD4',
        color:'#fff',
        margin:'0',
        padding:'20px 0',
        textAlign:'center',
        fontSize:'20px'
      },
      list:{
        textAlign:'center'
      },
      link:{
        textDecoration: 'none'
      }
    }
    return(
      <div style={styles.root}>
        <i className="material-icons" style={styles.icon} onTouchTap={this.handleToggle.bind(this)}>menu</i>
        <Drawer
          style={styles.list}
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <h2 style={styles.h2}>MY BLOG@{this.state.title}</h2>
          <Link to="/" style={styles.link} activeStyle={{color:'red'}} onlyActiveOnIndex={true}><MenuItem onTouchTap={this.handleClose.bind(this)}>首页</MenuItem></Link>
          <Link to="blog" style={styles.link} activeStyle={{color:'red'}}><MenuItem onTouchTap={this.handleClose.bind(this)}>博客</MenuItem></Link>
          <Link to="about" style={styles.link} activeStyle={{color:'red'}}><MenuItem onTouchTap={this.handleClose.bind(this)}>关于</MenuItem></Link>
        </Drawer>
      </div>
    )
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

export default NavBar
