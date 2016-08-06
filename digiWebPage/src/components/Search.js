import React from 'react'
//import Search from './Search'

class Search extends React.Component {
  render () {
    const styles={
      root:{

      }
    }
    return(
      <div style={this.props.style}>
        <input type='text' placeholder='手机号'/>
        <button type='submit'>领取助学金</button>
      </div>
    )
  }
}

export default Search
