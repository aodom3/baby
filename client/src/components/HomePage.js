import React, { Component } from 'react'
import { Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render () {
    return (
      <div className="opening">
        <div>
          <Button color="warning" onClick={this.toggle}>{this.props.buttonLabel}</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Babies!</ModalHeader>
            <ModalBody>
            Cupcake ipsum dolor sit amet macaroon halvah toffee. Cheesecake chupa chups oat cake brownie bear claw jelly beans carrot cake. Chocolate bar oat cake oat cake cheesecake macaroon liquorice apple pie.
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.toggle}>15% Off</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
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
      </div>
    )
  }
}

export default HomePage
