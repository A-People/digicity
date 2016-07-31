import React from 'react';

class App extends React.Component {
  getStyles() {
     return {
       root: {
         backgroundColor: 'goldenrod',
         padding: '40px',
         color: 'white',
         fontFamily: 'sans-serif',
         lineHeight: '1.9'
       },
       inner: {
         backgroundColor: 'teal',
         textAlign: 'center',
         padding: '10px',
         borderRadius: '5px'
       }
     }
   }

  render () {
    const styles = this.getStyles();
    return(
      <div style={styles.root}>
        hello everyone
        <div style={styles.inner}>
          peter
        </div>
      </div>
    )
  }
}

export default App;
