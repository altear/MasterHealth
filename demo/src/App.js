import React from 'react';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap Styles
import "holderjs" // Placeholder images
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Contact from './components/pages/Contact/Contact';
import AdminTools from './components/pages/AdminTools/AdminTools';
import HandoffSheets from './components/pages/HandoffSheets/HandoffSheets';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NotFound from './components/pages/NotFound/NotFound';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Link className="navbar-brand" to="/"> Master Health </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/handoff-sheets" >Hand-off Sheets</Link>
            <Link className="nav-link" to="/admin-toolset" >Administrative Toolset</Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact"> Contact Us </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/handoff-sheets" component={HandoffSheets} />
        <Route path="/admin-toolset" component={AdminTools} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>

      <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3">© 2018 Copyright:
          <Link to="/"> Master Health</Link>
        </div>
      </footer>
    </Router>
  );
}

export default App;
