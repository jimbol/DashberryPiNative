import React, { PropTypes } from 'react'
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import Header from './../containers/header'
import Chore from '../components/chore'

const Chores = ({dispatch, chores, user, createChore}) => {
  let chore = {
    label: 'Dishes'
  }

  return (
    <View>
      <Header title="My Chores" />
      <ScrollView style={styles.chores}>

        {chores.map( chore => {
          return <Chore key={chore._id} chore={chore} />
        })}

        <TouchableHighlight
          style={styles.chore}
          onPress={()=> createChore(user, chore) }>
          <Text style={styles.label}>
            + Add a Chore
          </Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  )
}

Chores.propTypes = {
  chores: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }))
}

let fullWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  chores: {
    marginBottom: 5,
    marginBottom: 5,
  },
  label: {
    fontSize: 15,
    textAlign: 'left',
    margin: 5,
  },
  chore: {
    backgroundColor: '#ddd',
    padding: 15,
    marginBottom: 5,
    marginHorizontal: 5,
    width: fullWidth - 10,
  }
})

export default Chores
