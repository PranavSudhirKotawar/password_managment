import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-slate-800  text-white'>
    <div className="mycontainer flex justify-between items-center py-5 px-4 h-14">

        <div className="logo font-bold text-white text-2xl">
          
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>OP/ &gt;</span>
         

          </div>
      {/* <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold' href="#">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contacts</a>
        </li>
      </ul> */}

      <button className='text-white bg-green-500  my-5 rounded-full flex  justifi-center items-center '>
        <img className='p-1 w-10' src="Icons/github.png" alt="" />
        <span className='font-bold px-4'>Github</span>
        
      </button>
    </div> 
    </nav>
  )
}

export default NavBar