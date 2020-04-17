import React from "react";
const UserListRow=({course})=>{
    return(<tr>
                   <td>{course.id} </td>
                    <td>{course.name}</td>  
                    <td>{course.age}</td> 
                    <td> {course.gender}</td> 
                    <td> {course.email}</td>        
                    <td>{course.phoneNo}</td> 
         </tr>
    ) 
}
export default UserListRow;