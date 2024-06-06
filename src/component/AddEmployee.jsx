import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const AddEmployee = () => {
    const emptyEmployee = {
        id: '',
        firstName: '',
        lastName: '',
        emailId: '',
    }

    const [employee, setEmployee] = useState(emptyEmployee)

    const navigate = useNavigate()

    const saveEmployee = (e) => {
        EmployeeService.saveEmployee(employee)
            .then((res) => {
                navigate('/employeeList')
                console.log(res)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const handleChange = (e) => {
        const value = e.target.value
        setEmployee({ ...employee, [e.target.name]: value })
    }

    const reset = (e) => {
        setEmployee(emptyEmployee)
    }

    return (
        <div className="flex max-w-2xl shadow border-b mx-auto">
            <div className="p-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Add New Employee</h1>
                </div>
                <div className="items-center justify-center h-14 w-full">
                    <label
                        htmlFor="firstName"
                        className="block text-gray-600 text-sm font-normal"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={employee.firstName}
                        onChange={(e) => handleChange(e)}
                        className="border-2 border-sky-500my-2 p-2"
                    />
                </div>
                <div className="items-center justify-center h-14 w-full my-3">
                    <label
                        htmlFor="lastName"
                        className="block text-gray-600 text-sm font-normal"
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        value={employee.lastName}
                        onChange={(e) => handleChange(e)}
                        className="border-2 border-sky-500my-2 p-2"
                    />
                </div>
                <div className="items-center justify-center h-14 w-full my-3">
                    <label
                        htmlFor="emailId"
                        className="block text-gray-600 text-sm font-normal"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="emailId"
                        value={employee.emailId}
                        onChange={(e) => handleChange(e)}
                        className="border-2 border-sky-500my-2 p-2"
                    />
                </div>
                <div className="items-center justify-center h-14 w-full my-6">
                    <button
                        className="rounded text-white font-semibold bg-green-500 px-6 py-2 hover:bg-green-800 ml-3 mr-1.5"
                        onClick={() => saveEmployee(employee)}
                    >
                        Save
                    </button>
                    <button
                        className="rounded text-white font-semibold bg-red-500 px-6 py-2 hover:bg-red-800 ml-1.5"
                        onClick={() => reset(employee)}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee
