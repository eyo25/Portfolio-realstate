import Logo from '../Image and logo/BezackLogo.png'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav} from 'react-bootstrap'
import React from 'react'

const Navigation = () => {
    return (
        <>
     <Navbar id='nav-style' bg='light' variant='light' className=' navbar-expand-md py-0 fixed-top'>
    <Navbar.Brand >
      <img
        alt="dfdf"
        src={Logo}
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand>
    <Nav   className="ml-auto">
<LinkContainer to="/">
<Nav.Link id="link-style">Home</Nav.Link> 
</LinkContainer> 
<LinkContainer to="/projects">
    <Nav.Link id="link-style">Projects</Nav.Link> 
</LinkContainer>
<LinkContainer to="/about">
    <Nav.Link id="link-style">About</Nav.Link> 
</LinkContainer>
    </Nav>
  </Navbar>   



        </>
    )
}

export default Navigation



