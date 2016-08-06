import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    const userInfo = this.props.userInfo;
    const styles={
      root:{
        color:'#fff',
        backgroundColor:'rgba(255,255,255,0.15)',
        boxShadow:'1px 1px 15px rgba(180,180,180,0.6),1px 1px 150px rgba(255,255,255,0.25) inset',
        border:'1px solid rgba(255,255,255,0.25)',
        width:'600px',
        padding:'45px 0 30px',
        margin:'0 auto',
      },
      img:{
        width:'100px',
        height:'100px',
        borderRadius:'8px'
      },
      ul:{
        listStyle:'none',
        marginTop:'20px',
        padding:0,
      },
      li:{
        width:'200px',
        float: 'left',
      },
      b:{
        fontSize:'24px',
        display:'block'
      },
      span:{
        display:'block'
      },
    }
    return (
      <div style={styles.root}>
        <img src={userInfo.avatar_url} style={styles.img}/>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <b style={styles.b}>{userInfo.followers}</b>
            <span style={styles.span}>followers</span>
          </li>
          <li style={styles.li}>
            <b style={styles.b}>{userInfo.following}</b>
            <span style={styles.span}>following</span>
          </li>
          <li style={styles.li}>
            <b style={styles.b}>{userInfo.public_repos}</b>
            <span style={styles.span}>repos</span>
          </li>
          <div style={{clear:'both'}}></div>
        </ul>
      </div>
    );
  }
}

export default UserInfo;
