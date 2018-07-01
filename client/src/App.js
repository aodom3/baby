import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import PicPage from './components/PicPage'
import NewPicPage from './components/NewPicPage'
import ShowUser from './components/ShowUser'

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* USERS */}
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/login/:userId" component={ShowUser} />
            {/* PICS */}
            <Route exact path="/user/:userId/pic" component={PicPage} />
            <Route exact path="/user/:userId/pic/:picId" component={NewPicPage} />
          </Switch>
      </Router>
    )
  }
}

export default App
