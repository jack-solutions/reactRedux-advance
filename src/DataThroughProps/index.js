import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

import Navbars from '../Home/navbar';
import ProfileData from '../DataThroughProps/editProfileData'
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
                <Navbars/>
                <ProfileData loginData={loginData} />
                </Container>
        )
    }
}
export default connect(mapStateToProps)(ReduxData);
