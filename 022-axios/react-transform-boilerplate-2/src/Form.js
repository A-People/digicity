import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Form extends React.Component {
  handleSubmit(e){
    e.preventDefault()
    console.log('asd');
  }
  render () {
    const styles={
      root:{
        textAlign:'center',
      }
    }
    return(
      <div style={styles.root}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField hintText='github username'/>
          <RaisedButton label='Submit' primary={true}/>
        </form>
      </div>
    )
  }
}

export default Form
