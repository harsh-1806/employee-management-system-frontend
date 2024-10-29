import axios from 'axios'

const EMPLOYEE_API_BASE_URL = import.meta.EMPLOYEE_API_BASE_URL

class EmployeeService {
    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
    }
    getEmployees() {
        // console.log
        return axios.get(EMPLOYEE_API_BASE_URL)
    }
    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id)
    }
    getEmployeeById(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
    }
    updateEmployee(id, employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
    }
}

export default new EmployeeService()
