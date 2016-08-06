import React from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle(){this.setState({open: !this.state.open});}

  handleClose(){this.setState({open: false});}
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
        textAlign:'center'
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
          <h2 style={styles.h2}>MY BLOG</h2>
          <Link to="/" style={styles.link} activeStyle={{color:'red'}} onlyActiveOnIndex={true}><MenuItem onTouchTap={this.handleClose.bind(this)}>首页</MenuItem></Link>
          <Link to="blog" style={styles.link} activeStyle={{color:'red'}}><MenuItem onTouchTap={this.handleClose.bind(this)}>博客</MenuItem></Link>
          <Link to="about" style={styles.link} activeStyle={{color:'red'}}><MenuItem onTouchTap={this.handleClose.bind(this)}>关于</MenuItem></Link>
        </Drawer>
      </div>
    )
  }
}

export default NavBar;
