import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './login.css'
import { connect } from 'react-redux';
import {LoggedUser} from "../Login/store/actions"

class Login extends Component {
    constructor(props) {
        super(props)
        const userList=[
            { name:'HR', pwd:'admin@123'},
            { name:'Hemant', pwd:'admin@123'},
            { name:'Jay', pwd:'admin@123'}
        ]
        this.state={
            users:userList,
            username:'',
            password:'',
            error:''
        }

        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let {error} =this.state.error
        this.state.users.map((data)=>{
            if(data.name===this.state.username && data.pwd===this.state.password){
                this.props.insertUser(this.state.username);
                this.props.history.push({pathname:"/Home"})        
            }else{
                error="Wrong UserName or Password"
            }
            return null
        })
        this.setState({error})
    }

    render() {
        return (
            <div className="main">
                <h1>Login Form</h1>
                <div className="row">
                    <div className="form-p">
                        <form>
                            <input className="text" type="text" placeholder="Username" name="username" onChange={(e)=>this.handleChange(e)} required />
                            <input className="text" type="password" placeholder="Password" name="password" onChange={(e)=>this.handleChange(e)} required />
                            <input type="submit" value="Submit" onClick={this.handleSubmit} />
                            {this.state.error.length>0?<p>{this.state.error}</p>:null}
                        </form>
                        <p><a href="/index.html">Forget your password ?</a></p>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default  withRouter ( connect(null,{
    insertUser:LoggedUser.insertUser
    
})(Login));