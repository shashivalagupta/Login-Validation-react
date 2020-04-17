export const  CREATE_COURSE='CREATE_COURSE';
export const RESET_COURSE='RESET_COURSE';
export const SET_FLAG='SET_FLAG';

  const CourseAction ={
    createCourse : (course)=>{    
    return{    type:CREATE_COURSE,
        course //API Call
     } },

     resetCourse : ()=>{
         return {
             type: RESET_COURSE,
             courses:""  
         }
     },
     setFlag:(flag)=>{
        return {
            type: SET_FLAG,
            flag:flag           
        }
     }
 } 
 export default CourseAction;
