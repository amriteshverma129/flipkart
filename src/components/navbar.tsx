import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mobiles from './mobile';
import Laptops from './laptop';
import LaptopDetail from './laptopDetail';
import MobileDetail from './mobileDetail';
import Cart from './cart';
import Home from './home';
import { ShoppingCartOutlined } from '@ant-design/icons'
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';

export const navbar = (props: any) => {
    return (
        <React.Fragment >
            <Router>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/laptop">Laptop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mobile">Mobile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart"><ShoppingCartOutlined /><span>{props.cartQuantity}</span></Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/laptop" component={Laptops}></Route>
                    <Route exact path="/mobile" component={Mobiles}></Route>
                    <Route exact path="/detail/laptop/:id" component={LaptopDetail}></Route>
                    <Route exact path="/detail/mobile/:id" component={MobileDetail}></Route>
                    <Route exact path="/cart" component={Cart}></Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar)
