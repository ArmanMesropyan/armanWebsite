import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.scss'

export default function Navbar() {
    return (
        <div className='Navbar'>
           
            <ul className='nav__links' >
              <li className='links' ><NavLink to='/'>Todos</NavLink></li>
              <li className='links' ><NavLink to='/newpage' > NewPage</NavLink></li>
            </ul>
          
        </div>
    )
}
