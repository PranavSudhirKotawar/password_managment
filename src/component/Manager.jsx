import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()

    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }

    }, [])




    const showPassword = () => {
        if (ref.current.src.includes("Icons/eyeclosed.png")) {
            ref.current.src = "Icons/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = "Icons/eyeclosed.png"
            passwordRef.current.type = "text"
        }
    }


    const copyText = (text) => {

        toast('Copied To Clipboard', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text)
    }

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            console.log([...passwordArray, form])
            setform({ site: "", username: "", password: "" })
        }
        else{
            toast('Erroe: cerdential should contain minimum 3 carector')
        }
    }


    const editPassword = (id) => {
        console.log("Edeating password with id", id)
        setform(passwordArray.filter(item => item.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))
    }


    const deletPassword = (id) => {
        console.log("Deleting password with id", id)
        let c = confirm("Do you really want to delet this password?")
        if (c) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))


        }



    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]">
            </div></div>

            <div className=" p-3 md:p-0 md:mycontainer">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/ &gt;</span>
                </h1>
                <p className='text-green-900 text-center text-lg'>Your Own Password Manager</p>



                <div className=" flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handlechange} placeholder='Enter Website URL' className=' rounded-full border border-green-500 w-full py-1 p-4 ' type="text" name='site' id='site' />
                    <div className="flex flex-col md:flex-row w-full gap-8">
                        <input value={form.username} onChange={handlechange} placeholder='Enter Username' className=' rounded-full border border-green-500 w-full py-1 p-4 ' type="text" name='username' id='username' />

                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handlechange} placeholder='Enter password' className=' rounded-full border border-green-500 w-full py-1 p-4 ' type="password" name='password' id='password' />
                            <span className=' absolute right-[3px] top-[4px] cursor-pointer ' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={30} src="Icons/eye.png" alt="" />
                            </span>
                        </div>


                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-600 rounded-full px-8 py-2 w-fit hover:bg-green-500 border border-green-900 '>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add password</button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className=' bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Passwords</th>
                                <th className='py-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className=' py-2 border border-white text-center '>
                                        <div className='flex items-center justify-center'>
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <div className='lordIconCopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px" }}
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' py-2 border border-white text-center min-w-32'>
                                        <div className='flex items-center justify-center'>
                                            {item.username}
                                            <div className='lordIconCopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px" }}
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' py-2 border border-white text-center min-w-32'>
                                        <div className='flex items-center justify-center'>
                                            {item.password}
                                            <div className='lordIconCopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px" }}
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' py-2 border border-white text-center min-w-32'>
                                        <span className='cursoe-pointer mx-2' onClick={() => { editPassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/wvdxdmpi.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursoe-pointer mx-2' onClick={() => { deletPassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/zxvuvcnc.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>
                            })}


                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager