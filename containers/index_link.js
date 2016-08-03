import React from 'react';
import { connect } from 'react-redux'
import Index from '../components/index';
import actions from '../actions/index';

const getRoute = (state) => {
  if(!state.user.idToken) {
    return { id: 'LOG_IN' }
  } else {
    return { id: 'CHORES' }
  }
}

const mapStateToProps = (state) => {
  return {
    route: getRoute(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (id) => {
      dispatch(actions.logOut())
    },
    fetchUser: (id) => {
      dispatch(actions.fetchUser())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
