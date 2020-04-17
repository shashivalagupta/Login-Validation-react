
import React from 'react';
import LoginInfo from "./JsonData/LoginInfo.json";
// import EmployeeList from './EmployeeList';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import CourseAction from "./Action/CourseAction"


class LoginForm extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            username:"", 
            password:"",
            nerror:"",
            perror:"",
            flag:false
        };
    }
    valid(){
        if(this.state.username===""&&this.state.password==="")
        {   
                   this.setState({nerror:"**Please Enter username",perror:"**Please Enter password"});
        }
        else if(this.state.password==="")
                   this.setState({perror:"**Please Enter password"});
        else if(this.state.username==="")
              this.setState({nerror:"**Please Enter username"});
         else if(this.state.username===LoginInfo.username&&this.state.password===LoginInfo.password)
        {
          return true;
        }
        else {
       
          if(!this.state.username.includes(LoginInfo.username)&&!this.state.password.includes(LoginInfo.password))
            this.setState({nerror:"**Invalid Username",perror:"**Invalid Password"});
          else if(!this.state.password.includes(LoginInfo.password))
             this.setState({perror:"**Invalid Password"});
          else if(!this.state.username.includes(LoginInfo.username))
             this.setState({nerror:"**Invalid Username"});

          return false;
        }
    }
    submit(){
      this.setState({nerror:" ",perror:" "});
        if(this.valid()){
        alert("submited successfully");
          this.setState({flag:true});
          this.props.actions.setFlag(true);
        }
        // this.props.actions.setFlag(true);
    }
    render(){
        return(
                 <div>
                     <h1>LoginPage</h1>
                     
                         Username: <input type="text" id="user" onChange={(event)=>(this.setState({username:event.target.value}))}></input><br></br>
                         <p style={{color:"red",fontsize:"14px"}}>{this.state.nerror}</p>
                         Password: <input type="text" id="pwd" onChange={(event)=>(this.setState({password:event.target.value}))}></input><br></br>
                          <p style={{color:"red",fontsize:"14px"}}>{this.state.perror}</p>
                         <input type="button" value="Login" onClick={()=>this.submit()} ></input>
                         
                     {/* {this.state.flag===true ? <EmployeeList/>:""} */}
                
                 </div>
            );
    };
}
function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators({
      ...CourseAction
  },dispatch)};
};

export default connect(null,mapDispatchToProps)(LoginForm);
