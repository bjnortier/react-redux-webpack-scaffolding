import { connect } from 'react-redux'

import Counter from '../components/Counter'
import { add, subtract } from '../actions/counter'

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAdd: () => dispatch(add()),
    onSubtract: () => dispatch(subtract())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
