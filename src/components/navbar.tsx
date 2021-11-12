import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mobile from './mobile';
import Laptop from './laptop';
import Home from './home';
import { Navbar, Container, Nav } from 'react-bootstrap'

const navbar = () => {
    return (
        <React.Fragment>
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/laptop">Laptop</Nav.Link>
                                <Nav.Link href="/mobile">Mobile</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Contact Us</Nav.Link>
                                <Nav.Link href="#memes">
                                    Login
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <br />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/mobile" component={Mobile}></Route>
                    <Route exact path="/laptop" component={Laptop}></Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default navbar
