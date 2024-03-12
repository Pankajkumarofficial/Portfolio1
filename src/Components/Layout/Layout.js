import React, { useState } from 'react'
import './Layout.css'
import Home from '../../Pages/Home/Home'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Menus from '../Menus/Menus';

const Layout = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div>
      <div className="sidebar-section">
        <div className="sidebar1">
          <div className={toggle ? "sidebar" : "sidebar-toggle"}>
            <div className="sidebar-toggle-icons">
              <p onClick={handleToggle}>
                {
                  toggle ? (<AiOutlineDoubleRight size={30} />) : (<AiOutlineDoubleLeft size={30} />)
                }
              </p>
            </div>
            <Menus toggle={toggle} />
          </div>
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </div>
  )
}

export default Layout
