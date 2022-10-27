import React from 'react'

const NavBar = () => {
  return (
    <>

      <div className="navmain flex m-6 rounded-2xl p-2">

      <div className=" flex justify-center space-y-1 space-x-3 p-1">
        <img className='logo' src="\logo192.png" alt="logo" />
        <span className='name justify-center font-bold '>TRAVAL INDIA</span>
      </div>

      <div className="menulist flex space-x-6 ml-auto mr-3">
        <ul className='navli space-x-5 m-1'>
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
          <li>Conetact Us</li>
        </ul>
        <button className='getbtn bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-900 rounded-full m-3'>Get Start</button>
      </div>


    
    
    
      </div>
    </>
  )
}

export default NavBar