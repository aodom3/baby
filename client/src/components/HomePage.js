import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HomePage extends Component {
  render () {
    return (
      <div>
        <h1>Baby App</h1>
        <p> Check the progression of your baby over his or her first year</p>
        <button>Log in</button>
      </div>
    )
  }
}

export default HomePage