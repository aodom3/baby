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
        <div>
          {/* <div>
            <Link to='/login'><button>Login</button></Link>
          </div> */}
          <Switch>
            <Route exact path="/" component={HomePage}/>
            {/* USERS */}
            <Route exact path="/login" component={LogInPage}/>
            <Route path="/user/:userId" component={ShowUser}/>
            {/* PICS */}
            <Route path="/user/:userId/pics" component={PicPage}/>
            <Route path="/user/:userId/pics/:picId" component={NewPicPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
