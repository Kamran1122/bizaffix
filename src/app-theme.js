import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';

//Custom Theme to change UI at application level
const CustomTheme = getMuiTheme({
  palette: {
    // Need to change based on requirments
    textColor: Colors.black,
    primary2Color: Colors.indigo700,
    primary1Color: Colors.indigo700,
    accent1Color: Colors.redA200,
    pickerHeaderColor: Colors.darkBlack,
  },
  appBar: {
    height: 57,
    color: Colors.white
  },
  raisedButton: {
    primaryColor: 'rgba(33, 150, 243, 0.85)',
    primaryTextColor: Colors.white
  },
  textField: {
    focusColor: 'rgba(33, 150, 243, 0.85)',
    textColor: 'rgba(33, 150, 243, 0.85)'
  },
  stepper: 
  {
    iconColor:"rgba(33, 150, 243, 0.85)"
  }
});

function AppTheme(){
  return CustomTheme;
}

export default AppTheme();
