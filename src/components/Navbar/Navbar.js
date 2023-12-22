import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './Navbar.css'
import Home from '../homePage/Home';
import Todo from '../todoPage/Index';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";




function Navbar() {
  let nav = [
    {
      id: 1,
      name: "Todo App",
      path: "/todo"
    },
    {
      id: "2",
      name: "Services",
      path: "/Services"
    }
  ]
  const [sideBar, setSideBar] = useState(false)
  const toogleNavbar = () => {
    setSideBar(!sideBar);
    console.log("toogle is clicked", sideBar)
  }


  return (
    <section className='main'>
      <Router>
        <main className="header"  >
          <Link to={"/"}>
            <div className="logo" >
              <div id="name">Arsal </div>
              <div id='service'> Services</div>
            </div>
          </Link>

          <nav>
            <ul className='navbar' >
              {nav.map((item, index) => (
                <li key={index} className='nav-link'>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}

            </ul>
          </nav>
        </main>
        <div onClick={toogleNavbar} className='open_button'>
          {sideBar ? <IoMdClose /> : <CiMenuFries />}
        </div>

        <div className={` ${sideBar ? 'sidebarOn' : 'sidebarOff'}`}>
          <nav className='links_container'>
            <ul className='side_navbar' >
              {nav.map((item, index) => (
                <li key={index} className='nav-link'>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>




        <Routes>
          {/* <Route path="/About" Component={About} /> */}
          <Route path="/" Component={Home} />
          <Route path="/todo" Component={Todo} />
        </Routes>

      </Router>
    </section>
  )
}

export default Navbar
