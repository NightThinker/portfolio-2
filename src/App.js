import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { css, jsx } from '@emotion/react'


import Home from './feature/Home/Home'
import Work from './feature/Work/Work'
import Contact from './feature/Contact/Contact'

import "./styles/main.css";

import logo from './assets/images/may-logo.png'


function App() {
  return (
    <Router>
      <div className='bg-gray-50'>
        <nav className='flex bg-gray-500 h-24 items-center py-5' >
          <img src={logo} className="" />
          <ul className='flex'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
