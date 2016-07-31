import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DatePicker from 'material-ui/DatePicker';
import Dialog from './Dialog'
import Drawer from './Drawer'
import Popover from './Popover'
import Slider from './Slider'
import Checkbox from './Checkbox'
import Toggle from './Toggle'
import RaisedButton from './RaisedButton'
import AutoComplete from './AutoComplete'
import FontIcon from './FontIcon'
import SvgIcon from './SvgIcon'
import DrawerRight from './DrawerRight'


class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    return(
      <div>
        <DrawerRight/>
        <RaisedButton/>
        <div>
          <DatePicker hintText="Portrait Dialog" />
          <DatePicker hintText="Landscape Dialog" mode="landscape" />
          <DatePicker hintText="Dialog Disabled" disabled={true} />
        </div>
        <AutoComplete/>
        <FontIcon/>
        <SvgIcon/>
        <Dialog/>
        <Drawer/>
        <Popover/>
        <Slider/>
        <Checkbox/>
        <Toggle/>
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
