import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
  import { HashRouter, Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class Navbars extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      profile_edit:false
    };
  }

  RedirectFn(path){
    this.setState({profile_edit:true,path:path})

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    if(this.state.profile_edit){
      return <Redirect to={{pathname:this.state.path}}/>
    }

    return (
      <div>
        <Navbar color="secondary" light expand="md">
          <NavbarBrand href="/#/home">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="javascript:void(0)"
                onClick={()=>{this.RedirectFn('/data-through-props')}}>First Page</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="javascript:void(0)"
               onClick={()=>{this.RedirectFn('/data-through-redux')}}
                >Second Page</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}