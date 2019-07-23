import React from 'react'
import { BrowserRouter as NavLink } from 'react-router-dom'

export default function NavWrapper() {

  return (
    <ul className="header">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Mac
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/iPad" activeClassName="activeNavButton">
            iPad
          </NavLink>
        </li>
         <li>
          <NavLink exact to="/iPhone" activeClassName="activeNavButton">
            iPhone
          </NavLink>
        </li>
         <li>
          <NavLink exact to="/Watch" activeClassName="activeNavButton">
            Watch
          </NavLink>
        </li>
         <li>
          <NavLink exact to="/TV" activeClassName="activeNavButton">
            TV
          </NavLink>
        </li>
         <li>
          <NavLink exact to="/Music" activeClassName="activeNavButton">
            Music
          </NavLink>
        </li>
         <li>
          <NavLink exact to="/Support" activeClassName="activeNavButton">
            Support
          </NavLink>
        </li>
    </ul>
  )
}