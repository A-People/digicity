import React, { PropTypes } from 'react'
import Search from './Search'
import CardList from './list/CardList'

class Bridge extends React.Component {
  onSearchChanged(str){
    console.log(str+'B');
  }
  render () {
    return(
      <div>
        <Search callbackParent={this.onSearchChanged.bind(this)}/>
        <CardList/>
      </div>
    )
  }
}

export default Bridge
