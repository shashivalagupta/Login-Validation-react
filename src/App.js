import React from "react";
import LoginForm from "./LoginForm";
import EmployeeList from './EmployeeList';
import {connect} from 'react-redux';
  class App extends React.Component 
  {
      constructor(props){
          super(props);
      this.state = {  name:"Shashivala"  };
      }
    render() 
    {
    return (
         <div>
         {this.props.flag===false ?<LoginForm/> :<EmployeeList/>}
         </div>  
    );
    }
}
function mapStateToProps(state,ownProps){
  return {courses:state.CourseReducer,
      flag:state.FlagReducer.flag};
}
export default connect(mapStateToProps)(App);
