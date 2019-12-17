import React, { Component } from 'react'
import PropTypes from 'prop-types'

class СhangeDish extends Component {
  render() {
    const {
      data
    } = this.props
    return (
      <div>
        {data}
      </div>
    )
  }
}

export default СhangeDish;
