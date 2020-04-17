import {combineReducers} from 'redux';

import CourseReducer from './CourseReducer';
import FlagReducer from './FlagReducer'


const rootReducer=combineReducers(
   { CourseReducer,FlagReducer }
);
export default rootReducer; 