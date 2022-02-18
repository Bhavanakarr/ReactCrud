import React, { Fragment, useState } from "react";
import './App.css';
import data from './mock.json';
import { nanoid } from 'nanoid';
import ReadRows from "./ReadRows";
import EditRows from "./EditRows";

const App = () => {
    const [employees, setEmployees] = useState(data);
    const [addFormData, setAddFormData] = useState({

        employeeID: " ",
        fullName: " ",
        designation: " ",
        email: " ",
    });
    const [editFormData, setEditFormData] = useState({
        employeeID: " ",
        fullName: " ",
        designation: " ",
        email: " ",
    })
    const [editEmployeeId, setEditEmployeeId] = useState(null);
    const handleAddFormChange = (event) => {
        console.log("in function");
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };
    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        const newEmployee = {
            id: nanoid,
            employeeID: addFormData.employeeID,
            fullName: addFormData.fullName,
            designation: addFormData.designation,
            email: addFormData.email,
        };

        const newEmployees = [...employees, newEmployee];
        setEmployees(newEmployees);
    };
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editEmployee = 
   {
            id:editEmployeeId,
            employeeID: editFormData.employeeID,
            fullName: editFormData.fullName,
            designation: editFormData.designation,
            email: editFormData.email,
        }
        const newEmployees=[...employees];
        const index=employees.findIndex((employee)=>employee.id===editEmployeeId);
        newEmployees[index]=editEmployee;
        setEmployees(newEmployees);
        setEditEmployeeId(null);

        };
    
    const handleEditClick = (event, employee) => {
        event.preventDefault();
        setEditEmployeeId(employee.id);

        const formValues = {
        
            employeeID: employee.employeeID,
            fullName: employee.fullName,
            designation: employee.designation,
            email: employee.email,
        };
        setEditFormData(formValues);
    };
const handleClickCancel=()=>{
    setEditEmployeeId(null);
};
const handleDeleteClick=(employeeIdp)=>{
const newEmployees=[...employees];
const index=employees.findIndex((employee)=>employee.id===employeeIdp);
newEmployees.splice(index,1);
setEmployees(newEmployees);
};

    return (
        <div className="app-container">
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th> Employee ID</th>
                            <th> Name</th>
                            <th> Designation</th>
                            <th>EmailAddress</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((empList) => (
                                <Fragment>
                                    {editEmployeeId === empList.id ? (

                                        <EditRows editFormData={editFormData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleClickCancel={handleClickCancel}
                                            
                                            />

                                    ) : (

                                        <ReadRows
                                            empList={empList}
                                            handleEditClick={handleEditClick}
                                            handleDeleteClick={handleDeleteClick}
                                        />
                                    )}



                                </Fragment>

                            ))
                        }

                    </tbody>
                </table>
            </form>
            <h2>Add New Employee</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input type="text"
                    name="employeeID"
                    required="required"
                    placeholder="Employee ID"
                    onChange={handleAddFormChange}
                />
                <input type="text"
                    name="fullName"
                    required="required"
                    placeholder="Full Name"
                    onChange={handleAddFormChange}
                />
                <input type="text"
                    name="designation"
                    required="required"
                    placeholder="Designation"
                    onChange={handleAddFormChange}
                />
                <input type="email"
                    name="email"
                    required="required"
                    placeholder="Email Address"
                    onChange={handleAddFormChange}
                />
                <button type="submit"> Add </button>
            </form>

        </div >
    )
};
export default App;