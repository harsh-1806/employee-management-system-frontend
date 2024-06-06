import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const UpdateEmployee = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        id: id,
        firstName: '',
        lastName: '',
        emailId: '',
    })

    const handleChange = (e) => {
        const value = e.target.value
        setEmployee({ ...employee, [e.target.name]: value })
    }

    // const reset = (e) => {
    //     setEmployee({
    //         id: id,
    //         firstName: '',
    //         lastName: '',
    //         emailId: '',
    //     })
    // };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await EmployeeService.getEmployeeById(id)
                setEmployee(res.data);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const updateEmployee = () => {
        // e.preventDefault();
        console.log(employee);
        EmployeeService.updateEmployee(id, employee)
        .then((res) => navigate("/employeeList"))
        .catch((err) => console.log(err));
    }

    return (
        <div className="flex max-w-2xl shadow border-b mx-auto">
            <div className="p-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Update Employee</h1>
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
                        onClick={updateEmployee}
                    >
                        Update
                    </button>
                    <button
                        className="rounded text-white font-semibold bg-red-500 px-6 py-2 hover:bg-red-800 ml-1.5"
                        onClick={() => navigate("/employeeList")}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateEmployee
