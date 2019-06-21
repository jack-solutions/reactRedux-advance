import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import EditModel from '../Modals/EditModel';

import DeleteConfirm from '../Modals/DeleteConfirm';
import { ToDoList } from './store/actions/index'
import { Button } from 'react-bootstrap';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      confirmDelete: false,
      username:'',
      lastname:'',
      age:'',
      contactno:''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onDelete(index) {
    this.setState({
      confirmDelete: true,
      index: index,
    })
  }

  addValueToList = () => {
  
    this.props.addItems({
      id:Date.now(),
      username:this.state.username,
      lastname:this.state.lastname,
      age:this.state.age,
      contactno:this.state.contactno
    });
    this.setState({ username: '',lastname:'',
    age:'',
    contactno:'' }) 
  }

  editList=(i)=>{
    this.setState({
      editMode: true,
      index: i,
    })
  }

  handleClose = (stateValue) => {
    if (stateValue === 'Yes') 
      this.props.removeItems(this.props.listOfUsers,this.state.index)
    else 
      this.setState({ index: '' })
    
    this.setState({
      confirmDelete: !this.state.confirmDelete
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>List of Users Add User </h1>
          User Name : <input name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
          Last Name : <input name="lastname" value={this.state.lastname} onChange={(e) => this.handleChange(e)} />
          Age : <input name="age" value={this.state.age} onChange={(e) => this.handleChange(e)} />
          Contact No. : <input name="contactno" value={this.state.contactno} onChange={(e) => this.handleChange(e)} />
          <Button onClick={this.addValueToList}>Add</Button>
          <ul>
            {
              this.props.listOfUsers.length > 0 && 
                this.props.listOfUsers.map((data, i) => (
                    <li key={i}>FirstName:{data.username }
                    Contactno:{data.contactno }Age:{data.age }
                     <Button onClick={() => this.onDelete(i)}>delete</Button>
                    <Button onClick={() => this.editList(i)}>Edit</Button>
                    </li>
                  ))
            }
          </ul>
        </div>
        {
          this.state.confirmDelete ?
            <DeleteConfirm showModal={this.state.confirmDelete} handleClose={this.handleClose} />
            : null
        }
        {
          this.state.editMode ?
           
          <EditModel editdetails={this.props.listOfUsers[this.state.index]}
            showModal={this.state.editMode} handleClose={this.handleClose}
          />
            : null
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.login.username,
    listOfUsers:state.listOfUsers.users 
  }
};

export default withRouter(connect(mapStateToProps, {
  addItems: ToDoList.addItem,
  removeItems: ToDoList.removeItem,
})(Home));
