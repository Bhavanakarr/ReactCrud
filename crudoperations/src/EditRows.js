import React from "react";

const EditRows = ({editFormData, handleEditFormChange,handleClickCancel}) => {

    return (
        <tr>
            <td><input type="text"
                name="employeeID"
                required="required"
                placeholder="Employee ID"
                value={editFormData.employeeID}
                onChange={handleEditFormChange}
            />
            </td>
            <td>
                <input type="text"
                    name="fullName"
                    required="required"
                    placeholder="Full Name"
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}

                />
            </td>
            <td>
                <input type="text"
                    name="designation"
                    required="required"
                    placeholder="Designation"
                    value={editFormData.designation}
                    onChange={handleEditFormChange}

                />
            </td>
            <td>
                <input type="email"
                    name="email"
                    required="required"
                    placeholder="Email Address"
                    value={editFormData.email}
                    onChange={handleEditFormChange}

                /></td>
<td>

    <button type="submit">Save</button>
    <button type="button" onClick={handleClickCancel}>Cancel</button>
</td>
        </tr>
    );
};
export default EditRows;