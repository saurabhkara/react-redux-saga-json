import React from 'react'
import '../../src/App.css';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    const data = useSelector(state => state.data);
    // console.log("redux Data",data)
  return (
    <div className='header'>
        <NavLink to='/' className='header-link'>
            <h1 className='item'>Contacts</h1>
        </NavLink>
        <NavLink to='/' className='header-link'>
            <h4 className='item'>Home</h4>
        </NavLink>
        <NavLink to='/about' className='header-link'>
            <h4 className='item'>About</h4>
        </NavLink>

        <NavLink to='/addedit' className='header-link'>
            <h4 className='item'>Add Edit</h4>
        </NavLink>
        {/* <NavLink to='/userinfo' className='header-link'>
            <h4 className='item'>User Info</h4>
        </NavLink> */}
             
    </div>
  )
}

