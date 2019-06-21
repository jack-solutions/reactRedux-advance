import React from 'react';
import '../App.scss'
import { Container, Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';
import { bindActionCreators } from 'redux'
import {ActCreators} from '../redux/bindActionCretor'
import {connect} from 'react-redux'
import { Redirect} from 'react-router-dom';
import Home from '../Home/home'
const mapStateToProps=state=>{
    console.log('state',state)
};

const mapDispatchToProps=dispatch=>{
    return bindActionCreators(ActCreators, dispatch)
};

class Login extends React.Component {


    constructor(props) {
        super(props);

        this.state={
            redirect:false
        }
    
      }

      componentWillMount(){
          this.props.Logout({})
      }

      loginFn(){


        this.props.Login({username:this.state.username})
        this.setState({redirect:true})


      }


    render() {


        if(this.state.redirect){
            return <Redirect to={{pathname:'/home'}}
            render={<Home />}/>
        }

        return (
            <Container>


                <Card className={'marginTop'}>


                    <CardBody>


<h4 className={'textCenter'}>Login</h4>

                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Username</Label>
                                <Input type="text" name="username"
                                onChange={(e)=>{this.setState({username:e.target.value})}}
                                value={this.state.username}
                                 id="username" placeholder="Username" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password"
                                value={this.state.password}
                                onChange={(e)=>{this.setState({password:e.target.value})}}
                                 name="password" 
                                 id="password"
                                  placeholder="Password" />
                            </FormGroup>

                            <Button
                            onClick={()=>{this.loginFn()}}
                            color="primary">Login</Button>
                        </Form>
                    </CardBody>
                </Card>


            </Container>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
