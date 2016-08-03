import React from 'react';
import { connect } from 'react-redux'
import Chores from '../components/chores';
import actions from '../actions/index';

const mapStateToProps = (state) => {
  return {
    chores: state.chores,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createChore: (user, chore) => {
      dispatch(actions.createChore(user, chore))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chores)
