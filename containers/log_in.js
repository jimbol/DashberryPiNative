import _ from 'underscore';
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import actions from '../actions/index';

class LogIn extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this.props.logIn}>
          <Text>Tap here to log in</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

LogIn.propTypes = {
  user: PropTypes.object
};

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => {
      dispatch(actions.logIn());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
