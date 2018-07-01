import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'


class LogInPage extends React.Component {
  constructor(){
    super()
  this.state = {
    email: '',
    password:'',
    pics:'',
  }
  this.onChange = this.onChange.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
  // componentDidMount() {
  //   this.getAllUsers()
  // }

  getAllUsers = () => {
    axios.get('localhost:3001/api/users').then(res => {
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
    const userLinks = this.state.users.map((user, i) =>{
      return (
        <div key={i}>
          <Link to={`/user/${user._id}`}>{user.userName}</Link>
        </div>)
    })
    return (
      <div>
        <h1>Sign In</h1>
        <h4>Existing Users..</h4>
        <p>{userLinks}</p>

        <h1>Sign Up</h1>
        <h4>New Users..</h4>
        <Form inline>
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        {' '}
        <Button color="info">Submit</Button>
      </Form>
        {/* <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Username"
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button type="submit">Go</button>
        </form> */}
      </div>
    )
  }
}

export default LogInPage