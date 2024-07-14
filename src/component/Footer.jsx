import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center w-full '>
            <div className="logo font-bold text-white text-2xl">

                <span className='text-green-500'>&lt;</span>
                Pass
                <span className='text-green-500'>OP/ &gt;</span>


            </div>
            <div className='flex justify-center items-center ' >
                Created With Love <lord-icon
                    src="https://cdn.lordicon.com/ohfmmfhn.json"
                    trigger="hover">
                </lord-icon>By Pranav Kotawar
            </div>

        </div>
    )
}

export default Footer
