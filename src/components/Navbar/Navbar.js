import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import About from '../aboutPage/About'
import Todo from '../todoPage/todo'
import Services from '../servicesPage/Services'
import './Navbar.css'


function Navbar() {


  return (
    <Router>



      <main className="header"  >
        <Link to={"/"}><div className="logo" >
          <div id="name">Arsal </div>
          <div id='service'> Services</div>
        </div>
        </Link>
        <nav>
          <ul className='navbar' >
            <li className='nav-link'>
              <Link to="/todo-app">ToDo App</Link>
            </li>
            <li className='nav-link'>
              <Link to="/app-2">App-2</Link>
            </li>
            <li className='nav-link'>
              <Link to="/app-3">App-3</Link>
            </li>
          </ul>
        </nav>
      </main>

      <Routes>
        <Route path="/About" Component={About} />
        <Route path="/" Component={Todo} />
        <Route path="/Services" Component={Services} />
      </Routes>

    </Router>
  )
}

export default Navbar
