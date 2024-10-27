import React, { useState } from 'react'
import githubIcon from '../assets/github.svg'

const Navbar = () => {
    const [size, setSize] = useState(32)

    return (
        <div className="bg-gray-800">
            <div className="h-16 px-8 flex items-center justify-between">
                <h1 className="text-xl text-slate-50 font-bold">
                    Employee Management System
                </h1>
                <a
                    href="https://github.com/harsh-1806/employee-management-system-frontend.git"
                    onMouseEnter={() => setSize(40)}
                    onMouseLeave={() => setSize(32)}
                >
                    <img
                        className="duration-300"
                        height={size}
                        width={size}
                        src={githubIcon}
                        alt=""
                    />
                </a>
            </div>
        </div>
    )
}

export default Navbar
