import React from 'react'

import { BrowserRouter as NavLink } from 'react-router-dom'

import styled from 'styled-components';
const UlStyle = styled.li`display: flex; flex-direction: row; justify-content: space-evenly; list-style: none;`;


export default function NavWrapper() {

  return (
    <ul className="header">
        <li>
          <NavLink to="/" activeClassName="activeNavButton">
            Mac
          </NavLink>
        </li>
        <li>
          <NavLink to="/iPad" activeClassName="activeNavButton">
            iPad
          </NavLink>
        </li>
         <li>
          <NavLink to="/iPhone" activeClassName="activeNavButton">
            iPhone
          </NavLink>
        </li>
         <li>
          <NavLink to="/Watch" activeClassName="activeNavButton">
            Watch
          </NavLink>
        </li>
         <li>
          <NavLink to="/TV" activeClassName="activeNavButton">
            TV
          </NavLink>
        </li>
         <li>
          <NavLink to="/Music" activeClassName="activeNavButton">
            Music
          </NavLink>
        </li>
         <li>
          <NavLink to="/Support" activeClassName="activeNavButton">
            Support
          </NavLink>
        </li>
    </ul>
  )
}