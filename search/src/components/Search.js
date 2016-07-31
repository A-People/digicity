import React from 'react';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search'
import Menu from 'material-ui/svg-icons/navigation/menu'

class TextFieldExampleSimple extends TextField{
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  handleChange(event){
    this.setState({
      value: event.target.value,
    })
    this.props.callBackParent(event.target.value)
                              //The method of conmunication between Search and CardList is bad
  }
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
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
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
