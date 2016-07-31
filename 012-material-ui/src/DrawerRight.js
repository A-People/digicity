import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';


export default class DrawerOpenRightExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle(){this.setState({open: !this.state.open});}

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
          zDepth={1}
        />
        <Drawer width={200} openSecondary={true} open={this.state.open} >
          <AppBar title="AppBar" />
        </Drawer>
      </div>
    );
  }
}
