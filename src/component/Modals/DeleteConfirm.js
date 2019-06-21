import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class DeleteConfirm extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={()=>this.props.handleClose('Close')}>
                <Modal.Header>
                    <Modal.Title>Confrim Delete Record</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span className="errMsg">Are you sure, you want to delete the record ?</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-danger" onClick={()=>this.props.handleClose('Yes')} >Yes</Button>
                    <Button className="btn btn-danger" onClick={()=>this.props.handleClose('No')} >No</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default DeleteConfirm;


