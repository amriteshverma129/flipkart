import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mobiles from './mobile';
import Laptops from './laptop';
import LaptopDetail from './laptopDetail';
import Cart from './cart';
import Home from './home';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { ShoppingCartOutlined } from '@ant-design/icons'

const navbar = () => {
    return (
        <React.Fragment >
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                    <Container>
                        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/laptop">Laptop</Nav.Link>
                                <Nav.Link href="/mobile">Mobile</Nav.Link>
                            </Nav>
                            <Nav>
                                {/* <Nav.Link href="#deets">Contact Us</Nav.Link>
                                <Nav.Link href="#memes">
                                    Login
                                </Nav.Link> */}
                                <Nav.Link href="/cart"     >
                                    <ShoppingCartOutlined />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/mobile" component={Mobiles}></Route>
                    <Route exact path="/laptop" component={Laptops}></Route>
                    <Route exact path="/detail/laptop/:id" component={LaptopDetail}></Route>
                    <Route exact path="/cart" component={Cart}></Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default navbar
