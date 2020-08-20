import React, { useState } from 'react';
import { Container, NavbarText } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar dark style={{'backgroundColor': '#940f0f', 'display':'block'}} light expand="md" fixed="top">
      <Container className="themed-container">
        <span>
            <a href='/'><img src="logo.png" alt="logo" width="50" /></a>
        </span>
        <NavbarBrand href="/" style={{'marginLeft':'1.5rem', 'color':'#fff'}}>MEALKHU</NavbarBrand>
        <NavbarToggler style={{
          
        }} onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/about" style={{'color':'#fff'}}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/menu" style={{'color':'#fff'}}>Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/mypick" style={{'color':'#fff'}}>MyPick</NavLink>
              </NavItem>
            </Nav>
            <NavbarText><a href="http://khuhub.khu.ac.kr/2019102227/TermProject" target="_blank" rel="noopener noreferrer" style={{'color':'#fff', 'textDecoration':'none'}}>OSS Project</a></NavbarText>
          </Collapse>  
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;