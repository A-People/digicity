import React, { Component } from 'react';
import map from 'lodash/fp/map';

class Repos extends Component {
  render() {
    const styles={
      ul:{

      },
      li:{
        border:'1px solid #000'
      }
    }
    const repoList = map(this.props.repos, (repo) => {
      return (
        <li key={repo.id} style={styles.li}>
          <div>
            <p className='name'>{repo.name}</p>
            <p className='lang'>{repo.language}</p>
          </div>
          <p className='desc'>{repo.description}</p>
        </li>
      );
    });
    return (
      <ul style={styles.ul}>
        { repoList }
      </ul>
    );
  }
}

export default Repos;
