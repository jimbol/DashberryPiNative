import { connect } from 'react-redux'

import { toggleMenu } from '../actions'
import Header from '../components/header'

function mapStateToProps(state) {
  return {
    menuOpen: state.menuOpen,
    lists: state.lists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonPress: () => {
      dispatch(toggleMenu())
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
