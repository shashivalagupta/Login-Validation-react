import DataInfo from "../JsonData/DataInfo.json";
let initialState = [];

DataInfo.map((user) => {
initialState.push({ 
id : user.id,
name: user.name,
age: user.age,
gender: user.gender,
email:user.email,
phoneNo: user.phoneNo
})
return user
})

export default function CourseReducer(state=initialState,action){
    switch(action.type){ 
        case 'CREATE_COURSE':
            return [...state,Object.assign({},action.course)]
              
        default:
            return state;
    }
}
