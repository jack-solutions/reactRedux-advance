import React from 'react';
import { bindActionCreators } from 'redux'
import { ActCreators } from '../redux/bindActionCretor'
import { connect } from 'react-redux'
import { HashRouter, Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../routes';
import Login from '../Login/login'
import _ from 'underscore'

let loginData = {};
const mapStateToProps = state => {
    console.log('state', state)
    loginData = state;
};



class DefaultLayout extends React.Component {


    constructor(props) {
        super(props);

        this.state = {

        }

    }


    render() {
        return (
            <>

                {loginData && !_.isEmpty(loginData.logindata)
                    && loginData.logindata.username ?

                    <Switch>
                        {routes.map((route, idx) => {
                            return (<Route key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <route.component {...props} />
                                )} />)
                        },
                        )}
                        <Redirect from="/" to="/login" />
                    </Switch>
                    :
                  
                    <Redirect to="/login" />
                 
                }


            </>

        )
    }


}
export default connect(mapStateToProps)(DefaultLayout);
