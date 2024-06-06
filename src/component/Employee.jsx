import React from 'react'
import { useNavigate } from 'react-router-dom'

const Employee = ({ employee, deleteEmployee }) => {
    const { firstName, lastName, emailId } = employee

    const navigate = useNavigate()

    const editEmployee = (e, id) => {
        e.preventDefault()
        navigate(`/editEmployee/${id}`)
    }

    return (
        <tr>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{firstName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{lastName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{emailId}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap font-medium text-sm">
                <a
                    onClick={(e, id) => editEmployee(e, employee.id)}
                    className="text-indigo-600 hover:text-indigo-900 px-4 hover:cursor-pointer"
                >
                    Edit
                </a>
                <a
                    onClick={(e) => deleteEmployee(e, employee.id)}
                    className="text-red-600 hover:text-red-800 px-4 cursor-pointer"
                >
                    Delete
                </a>
            </td>
        </tr>
    )
}

export default Employee
