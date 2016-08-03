import React from 'react';
import { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import Chores from '../containers/chores_link'
import LogIn from '../containers/log_in'

class Index extends Component {

  componentDidMount() {
    this.props.fetchUser()
  }

  getContent(){
    console.log(this.props.route.id);
    switch (this.props.route.id) {
      case 'CHORES':
        return <Chores />
      default:
        return <LogIn />
    }
  }

  render() {
    let content = this.getContent()

    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.chore}
          onPress={this.props.logOut}>
          <Text>Log Out</Text>
        </TouchableHighlight>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

export default Index
