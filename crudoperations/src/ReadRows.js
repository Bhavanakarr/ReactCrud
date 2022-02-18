import React from "react";

const ReadRows=({empList,handleEditClick,handleDeleteClick })=>{
    return(
        <tr>
        <td>{empList.employeeID}</td>
        <td>{empList.fullName}</td>
        <td>{empList.designation}</td>
        <td>{empList.email}</td>
        <td>
<button type="button" onClick={(event)=>handleEditClick(event,empList)}>Edit</button>
<button type="button" onClick={()=>handleDeleteClick(empList.id)}>Delete</button>

        </td>
    </tr>
    )
}
export default ReadRows;