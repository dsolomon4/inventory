import React, { Component } from 'react';
import { Navbar, Icon, NavItem} from 'react-materialize';
import "./header.css";

class Header extends Component {
  
  render() {
    return (
      <div>
        <Navbar id= "navbar-detail"
            alignLinks="left"
            brand={<a classname="brand-logo" href="/">Inventory</a>}
            centerLogo
            menuIcon={<Icon>menu</Icon>}
            options={{
              draggable: true,
              edge: 'left',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
              preventScrolling: true
            }}
          >
        <NavItem href="/login" > Log in/ Log out </NavItem>
        <NavItem href="/inventory"> Stock</NavItem>
        <NavItem href="/admin"> Admin</NavItem>

      </Navbar>
> 
                </div>
           
        )
    }
}


export default Header;