import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const Header = ({menuOpen, onButtonPress}) => {
  let title = 'My Chores';

  if (menuOpen) {
    var menu = <Text>Menu open</Text>
  }

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {menu}
      <TouchableHighlight
        style={styles.button}
        onPress={onButtonPress}>
        <Text style={styles.buttonLabel}>&#x2630;</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={onButtonPress}>
        <Text style={styles.buttonLabel}>+</Text>
      </TouchableHighlight>
    </View>
  );
}

Header.propTypes = {
  menuOpen: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#666',
    height: 50,
  },
  button: {
    padding: 10,
    flex: .35,
  },
  buttonLabel: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
  },
  title: {
    padding: 10,
    flex: 2,
    color: '#fff',
    fontSize: 24,
  }
});


export default Header
