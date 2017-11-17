import Constants from '../consts';
import Helpers from '../helpers';

/*Reducers for dispatch actions for single Employee*/
const employeeSingle = (state = {}, action = {}) => {
    switch (action.type) {
      case Constants.GET_EMPLOYEE_SUCCEEDED:
        // Возвращаем 1 экземпляр 
        return action.payload;
      case Constants.GET_EMPLOYEE_FAILED:
        return { error: action.payload };
      case Constants.CLEAR_EMPLOYEE_SUCCEEDED:
        // Возвращаем новый элемент Employee 
        return Helpers.getNewEmployee();
      case Constants.CLEAR_EMPLOYEE_FAILED:
        return { error: action.payload };
      default:
        return state;
    }       
  };
  export default employeeSingle