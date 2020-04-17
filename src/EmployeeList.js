import React from "react";
import {connect} from 'react-redux';
import UserListRow from "./UserListRow";
class EmployeeList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            name:""
        };
    }  
render(){
    return(
        <div>
            <h1>EmployeeListPage</h1>
            <table >
             <thead>
                 <tr>
                     <th>id</th>
                     <th>name</th>
                     <th>age</th>
                     <th>gender</th>
                     <th>email</th>
                     <th>phoneNo</th>
                 </tr>
             </thead>
              <tbody>
              {this.props.courses.map(course=>
                  <UserListRow key={course.id} course={course}/>
                 )
            } 
              </tbody>
            </table>
        </div>
    );
 }
}
function mapStateToProps(state,ownProps){
    return {courses:state.CourseReducer};
}

export default connect(mapStateToProps)(EmployeeList);
