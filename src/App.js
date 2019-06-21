import React, { Component } from 'react';
import  History  from './history';
import { Router,Route,Switch } from 'react-router-dom';
import Login from './component/Login/Login';
import Home from './component/Home/Home';

class App extends Component {
  render() {
    return (
      <Router history={History}>
        <Switch>

           <Route exact path='/' 
            render={ ()=>(<Login />) }>
          </Route>

          <Route exact path='/Home' 
            render={ ()=>(<Home />) }>
          </Route>
{/*
          <Route exact path='/FirstPage' 
            render={ ()=>(<FirstPage />) }>
          </Route>
           */}
        </Switch>

      </Router>
    );
  }
}

export default App;
