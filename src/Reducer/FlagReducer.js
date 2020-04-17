
let initialState= {
    flag:false
}
export default function FlagReducer(state=initialState,action){
    switch(action.type){ 
        case 'SET_FLAG':
           
            let flag=action.flag;
            return Object.assign({},state,{flag:flag })        
        default:
            return state;
    }
}