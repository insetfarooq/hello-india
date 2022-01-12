import React ,{useState,useEffect} from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from "react-router-dom"

const ListEmployeeComponents = () => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
      getAllEmployees();
    }, [])
    const getAllEmployees =()=>{
        EmployeeService.getAllEmployees().then((response)=>{
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
          console.log(error);
        })
    }
          const deleteEmployee =(employeeId) =>{
            EmployeeService.deleteEmployee(employeeId).then((response)=>{
              getAllEmployees();
                }).catch(error =>{
                  console.log(error);
                  })
     }
    return (
        <div className='container'>
            <h2 className='textcenter'> List Employees</h2>
            <hr />
            <Link to ="/add-employee" className='btn btn-primary mb-2'>Add Employee</Link>
            <table className='table table-bordered table-striped'>
               <thead >
                  <th> Employee Id</th>
                  <th> Employee firstName</th>
                  <th> Employee lastName</th>
                  <th> Employee emailId</th>
                  <th>Actions</th>
               </thead>
               <tbody>
                   {
                       employees.map(
                           employee =>
                           <tr key={employee.id}>
                                 <td>{employee.id}</td>
                               <td>{employee.firstName}</td>
                               <td>{employee.lastName}</td>
                               <td>{employee.emailId}</td>
                               <td>
                               <Link className='btn btn-info' to={'/edit-employee/'+employee.id}>update</Link>
                 <Link className='btn btn-danger' onClick={()=> deleteEmployee(employee.id)} style = {{marginLeft:"10px"}}>Delete</Link>
                               </td>
                         </tr>)
                    }
               </tbody>
               </table>
        </div>
    )
}

export default ListEmployeeComponents;
