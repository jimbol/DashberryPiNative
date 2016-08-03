import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { toggleMenu } from '../actions'

const Header = ({dispatch, menuOpen}) => {
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
        onPress={()=> onButtonPress(dispatch)}>
        <Text style={styles.buttonLabel}>&#x2630;</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.button}
        onPress={()=> onButtonPress(dispatch)}>
        <Text style={styles.buttonLabel}>+</Text>
      </TouchableHighlight>
    </View>
  );
}

const onButtonPress = (dispatch) => {
  dispatch(toggleMenu())
}

Header.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  lists: PropTypes.array
};

function mapStateToProps(state) {
  return {
    menuOpen: state.menuOpen,
    lists: state.lists,
  }
}

Header = connect(mapStateToProps)(Header)

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
