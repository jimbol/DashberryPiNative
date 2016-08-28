import { connect } from 'react-redux';
import actions from '../actions/index';
import LogIn from '../components/log_in'


function mapStateToProps(state) {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => {
      dispatch(actions.logIn());
    },
    signUp: () => {
      dispatch(actions.signUp());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
