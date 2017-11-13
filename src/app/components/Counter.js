import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { style } from 'glamor'

class Counter extends Component {
  render () {
    const { counter, onAdd, onSubtract } = this.props
    return <div
      {...style({
        fontFamily: "'Arial', 'Sans'",
        fontSize: 20,
        margin: 10
      })}
    >
      <span {...style({
        margin: 10
      })}>{counter}</span>
      <button onClick={onAdd}>+</button>
      <button onClick={onSubtract}>-</button>
    </div>
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired
}

export default Counter
