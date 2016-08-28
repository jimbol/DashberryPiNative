import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class LogIn extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this.props.logIn}>
          <Text>Tap here to log in</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.props.signUp}>
          <Text>Tap here to signUp</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

LogIn.propTypes = {
  user: PropTypes.object
}

export default LogIn
