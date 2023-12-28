import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
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
    <section className='relative'>
      <Router >
        <main className="fixed w-[100%] top-0  flex items-center justify-between z-[100]  px-[30px] py-[20px] backdrop-blur-sm bg-[255,255,255, 0.9]  border-b-2 border-[42, 39, 39, 0.3] "  >
          <Link to={"/"}>
            <div className="flex items-center bg-white text-lg md:text-xl " >
              <div id="name" className=" p-1 md:p-2 text-[#163c90] bg-white border-2 rounded-tl-xl rounded-bl-xl border-[#163c90]">Arsal </div>
              <div id='service' className="p-1 md:p-2 text-[#fff] bg-[#163c90] border-2 border-[#163c90] rounded-tr-xl rounded-br-xl"> Services</div>
            </div>
          </Link>

          <nav className='hidden md:block '>
            <ul className='flex text-[#163c90]' >
              {nav.map((item, index) => (
                <li key={index} className='text-xl ml-6 my-2'>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}

            </ul>
          </nav>
        </main>
        <div onClick={toogleNavbar} className='flex fixed top-7 right-8 text-2xl font-bold transform-1 text-gray-800 md:hidden z-[900] hover:cursor-pointer'>
          {sideBar ? <IoMdClose /> : <CiMenuFries />}
        </div>

        <div className={`bg-[#163c90] fixed w-[250px] h-[100vh] block md:hidden z-[800] top-0 ${sideBar ? ' text-[#fff] right-0 duration-1000' : ' md:-w-[250px]  right-[-250px] duration-1000'}`}>
          <nav className='links_container'>
            <ul className='mt-[65px] p-[10px] text-2xl font-bold' >
              {nav.map((item, index) => (
                <li key={index} className='p-2'>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
        <Routes className=''>
          {/* <Route path="/About" Component={About} /> */}
          <Route path="/" Component={Home} />
          <Route path="/todo" Component={Todo} />
        </Routes>

      </Router>
    </section>
  )
}

export default Navbar
