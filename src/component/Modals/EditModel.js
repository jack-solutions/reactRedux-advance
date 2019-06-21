import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
class EditModel extends Component {
    constructor(props){
        super(props)
        this.state={
            userData:this.props.editdetails,
            userId:this.props.editdetails.id
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    updateUserDetails=()=>{
        console.log(this.state)
        console.log("listOfUsers...........",this.props.listOfUsers)
    }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={()=>this.props.handleClose('Close')}>
                <Modal.Header>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
                <div>
                    <h1>List of Users Add User </h1>
                    User Name : <input name="username" defaultValue={this.state.userData.username} onChange={(e) => this.handleChange(e)} />
                    Last Name : <input name="lastname" defaultValue={this.state.userData.lastname} onChange={(e) => this.handleChange(e)} />
                    Age : <input name="age" defaultValue={this.state.userData.age} onChange={(e) => this.handleChange(e)} />
                    Contact No. : <input name="contactno" defaultValue={this.state.userData.contactno} onChange={(e) => this.handleChange(e)} />
           </div> 
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.updateUserDetails}>Update</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      listOfUsers:state.listOfUsers.users 
    }
  };
  
  export default withRouter(connect(mapStateToProps, {

  })(EditModel));
  