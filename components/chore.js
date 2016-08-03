import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View
} from 'react-native';

const Chore = ({chore}) => {
  return (
    <View style={styles.chore}>
      <Text style={styles.label}>
        {chore.label}
      </Text>
    </View>
  );
};

Chore.propTypes = {
  chore: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })
};

let fullWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    textAlign: 'left',
    margin: 5,
  },
  chore: {
    backgroundColor: '#efefef',
    padding: 15,
    marginBottom: 5,
    width: fullWidth,
  },
});

export default Chore;
