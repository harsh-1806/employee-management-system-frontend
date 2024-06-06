import React from 'react'
import './index.css'
import Navbar from './component/Navbar'
import AddEmployee from './component/AddEmployee'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EmployeeList from './component/EmployeeList';
import UpdateEmployee from './component/UpdateEmployee';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<EmployeeList />}></Route>
                    <Route path="/" element={<EmployeeList />}></Route>
                    <Route path='/employeeList' element={<EmployeeList />}></Route>
                    <Route path='/addEmployee' element={<AddEmployee />}></Route>
                    <Route path='/editEmployee/:id' element={<UpdateEmployee />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
