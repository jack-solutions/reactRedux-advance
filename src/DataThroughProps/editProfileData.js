import React from 'react';
import '../App.scss'
import { Container, Button, Alert, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';
import { bindActionCreators } from 'redux'
import { ActCreators } from '../redux/bindActionCretor'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    console.log('state', state)
};


const mapDispatchToProps = dispatch => {
    return bindActionCreators(ActCreators, dispatch)
};

class ProfileData extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            notification:false
        }



    }

    componentWillMount() {
        this.setState({ username: this.props.loginData.logindata.username })
    }

    updateDataFn() {
        var this_pointer=this;

        this.props.EditProfileData({ username: this.state.username })
        this.setState({notification:true})

        setTimeout(
            function() {
                this_pointer.setState({notification:false})
            }, 5000);
    }
    render() {

        return (



            <Card className={'marginTop'}>


                <CardBody>

{this.state.notification ? 
    <Alert color="success">
                        Data updated successfully!
      </Alert>
: ''}
                

                    <h4 className={'textCenter'}>Edit Data</h4>

                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input type="text" name="username"
                                //value={loginData.logindata.username}
                                onChange={(e) => { this.setState({ username: e.target.value }) }}
                                value={this.state.username}
                                id="username" placeholder="Username" />
                        </FormGroup>


                        <Button
                            onClick={() => { this.updateDataFn() }}
                            color="primary">Update</Button>
                    </Form>
                </CardBody>
            </Card>

        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileData);
