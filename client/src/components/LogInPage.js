import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'


class LogInPage extends React.Component {
  constructor(){
    super()
  
  this.state = {
    user:[]

  }
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get('/api/users').then(res => {
      this.setState({users: res.data})
    })
  
  }

  handleChange = (event) => {
    const inputName = event.target.name
    const userInput = event.target.value

    const newState = { ...this.state }
    newState[ inputName ] = userInput
    this.setState(newState)

  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/api/users', this.state).then((res) => {
      console.log(res.data)
      this.props.history.push(`/users/${res.data._id}`)
    })
  }


  render () {
    const userLinks = this.state.user.map((user, i) => {
      return (
        <div key={i}>
          <Link to={`/user/${user._id}`}>{user.userName}</Link>
        </div>)
    })
    return (
      <div>
        <h1>Sign In</h1>
        <h4>Existing Users..</h4>
        {userLinks} 
        <h1>Sign Up</h1>
        <h4>New Users..</h4>
        <Form inline>
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
        </FormGroup>
        {' '}
        <Link to='/login/:userId'><Button color="info" size="lg" block>Submit</Button>{' '}
            </Link>
      </Form>  
      </div>
    )
  }
}

export default LogInPage