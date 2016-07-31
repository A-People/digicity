import React from 'react';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search'
import Menu from 'material-ui/svg-icons/navigation/menu'

class TextFieldExampleSimple extends TextField{
  render(){
    let styles={
      root:{
        textAlign:'center',
      },
      icon:{
        color:'#fff',
        marginRight:'10px',
        fontSize:'26px',
        position:'relative',
        top:'10px',
      },
      textField:{
        width:'400px',
      }
    }
    return(
      <div style={styles.root}>

          <i className="material-icons" style={styles.icon}>search</i>

        <TextField
          hintText='搜索'
          style={styles.textField}
          underlineStyle={{borderColor:'#ccc'}}
          underlineFocusStyle={{borderColor:'#fff'}}
          hintStyle={{color:'#fff'}}
          inputStyle={{color:'#fff'}}
        />
        <Search/>
        <Menu/>
      </div>
    )
  }
}

export default TextFieldExampleSimple;
