import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import Navbars from '../Home/navbar'
import './index.scss'
import { bindActionCreators } from 'redux'
import { ActCreators } from '../redux/bindActionCretor'
import { connect } from 'react-redux'

let loginData = {}
const mapStateToProps = state => {
    loginData = state;
};


class ReduxData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <Container>

                <Navbars />
                <ListGroup className={'mt10'}>
                    <ListGroupItem>

                        <b>Username: <span className={'usernameColor'}>
                            {loginData.logindata.username}
                        </span></b>
                    </ListGroupItem>

                </ListGroup>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(ReduxData);
