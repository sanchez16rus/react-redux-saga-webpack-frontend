import {combineReducers} from 'redux';
import departments from './departmentsReducer';
import employees from './employeesReducer';
import departmentSingle from './departmentSingleReducer';
import employeeSingle from './employeeSingleReducer';

/*All Reducers for dispatch actions in the combined*/
const rootReducer = combineReducers({
    departments,
    employees,
    departmentSingle,
    employeeSingle
  });
    
  export default rootReducer;