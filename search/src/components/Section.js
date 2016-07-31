import React from 'react'

import CardList from './list/CardList'

class Section extends React.Component {
  render () {
    return(
      <div>
        <CardList searchValue={this.props.searchValue}/>
      </div>
    )
  }
}

export default Section
