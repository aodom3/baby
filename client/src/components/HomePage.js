import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import {Link} from 'react-router-dom'

class HomePage extends Component {
  render () {
    return (
            <div>
            <Jumbotron>
              <h1 className="display-3">Babies...grow...fast!</h1>
              <p className="lead">Check the progression of your baby over his or her first year!</p>
              <hr className="my-2" />
              <p className="lead">
              <Link to='/login'><Button color="info" size="lg" block>Login</Button>{' '}
            </Link>
              </p>
            </Jumbotron>
        </div>
    )
  }
}

export default HomePage
