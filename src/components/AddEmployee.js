import React,{useState,useEffect} from 'react'
import EmployeeService from '../services/EmployeeService'
import {Link,useHistory,useParams} from "react-router-dom";

const AddEmployee = () => {
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [emailId, setEmailId] = useState('')
   const history =useHistory();
   const {id} = useParams();
   
   const saveorUpdateEmployee=(e)=>{
       e.preventDefault();
       const employee={firstName, lastName, emailId}
      if(id){
           EmployeeService.updateEmployee(id,employee).then(response =>{
               history.push('/employees');
           }).catch(error =>{
               console.log(error);
           })
         }else{
        EmployeeService.createEmpolyee(employee).then((response) =>{
         console.log(response.data);
            history.push('/employees');
         }).catch(error => {
    
              console.log(error);
          })
       }
  }
   useEffect(() => {
      EmployeeService.getEmployeeById(id).then((response) =>{
          setFirstName(response.data.firstName)
          setLastName(response.data.lastName)
          setEmailId(response.data.emailId)
       }).catch(error =>{
          console.log(error);
       })
   }, [])
  const  title = ()=>{
       if(id){
           return <h2 className='text-center'>update Employee</h2>
       }else{
      return <h2 className='text-center'>Add Employeee</h2>
     }
   }
    return (
        <div><br /><br />
            <div className='container' >
                <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        title()
                    }
                  <div className='card-body'>
                       <form className='continer'>
                           <div className='form-group mb-2'>
                               <lable className="form-label">Fisrt Name:</lable>
                               <input 
                                 type="text"
                                 placeholder='Enter First Name'
                                 name='firstName'
                                 className='form-control'
                                 value={firstName}
                                 onChange={(e)=>setFirstName(e.target.value)} />
                           </div>
                           <div className='form-group mb-2'>
                               <lable className="form-label">Last Name:</lable>
                               <input 
                                 type="text"
                                 placeholder='Enter Last Name'
                                 name='lastName'
                                 className='form-control'
                                 value={lastName}
                                 onChange={(e)=>setLastName(e.target.value)} />
                           </div>
                           <div className='form-group mb-2'>
                               <lable className="form-label">Email Id:</lable>
                               <input 
                                 type="text"
                                 placeholder='Enter Email Id'
                                 name='emailId'
                                 className='form-control'
                                 value={emailId}
                                 onChange={(e)=>setEmailId(e.target.value)} />
                           </div>
                           <button className='btn btn-success' onClick = {(e) => saveorUpdateEmployee(e)}>submit</button>
                    <Link to ="/employees" className="btn btn-danger" style = {{marginLeft:"8px"}}> Cancel</Link>
                       </form>

                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}
export default AddEmployee
