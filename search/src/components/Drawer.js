import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle(){
    this.setState({open: !this.state.open})
  }

  handleClose(){
    this.setState({open: false})
  }

  render() {
    let styles={
      root:{

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
      }
    }
    return (
      <div style={styles.root}>
        <i className="material-icons" style={styles.icon} onTouchTap={this.handleToggle.bind(this)}>menu</i>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <h2 style={styles.h2}>好多视频网</h2>
          <div style={styles.list}>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>视频列表</MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>关于</MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>注册</MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>登录</MenuItem>
          </div>
        </Drawer>
      </div>
    );
  }
}
