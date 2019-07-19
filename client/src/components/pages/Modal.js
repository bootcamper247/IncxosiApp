import React, {Component} from "react";
//import {useState} from "react";

//import ReactDOM from "react-dom";
import { Modal, Button } from "react-bootstrap"

class MyModal extends Component{
  state = {
    show: this.props.show
  };

   handleClose = () =>  this.setState({ show: false});

   handleShow = () => this.setState({ show: true});
  
   render() {

  return (
    <>
      <Modal show={this.state.show} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>WoohoouseState, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
   }

}

export default MyModal;