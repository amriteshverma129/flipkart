import React, { Component } from 'react'
import Footer from './components/footer'
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App" style={{ height: "100vh" }}>
          <Navbar />
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}
