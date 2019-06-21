import React, { Component } from 'react';
import { BrowserRouter as Router ,HashRouter,Route, Switch } from 'react-router-dom';
import DefaultLayout from './DefaultLayout/index'
import Login from './Login/login'
class App extends Component {
    constructor(props) {
      super(props);
  
    }
  
  
    render() {
   
  
      return (
        <HashRouter>

        <Switch>
        <Route path="/login" name="Login" component={Login} />
          <Route path="/" name="DefaultLayout" component={DefaultLayout} />
  
        </Switch>
  
  </HashRouter>
      );
    }
  }
  

export default App;
