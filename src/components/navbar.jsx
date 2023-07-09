import React from 'react';
import { FaSmile } from 'react-icons/fa';

export default function Navbar(props){
  return (
    <>
    <div className='navbar'>
      <nav>
        <FaSmile style={{fontSize: "20px", marginRight: "5px"}}></FaSmile>
        <span className='main-logo'>{props.name}</span>
      </nav>
    </div>
        </>
  )
}