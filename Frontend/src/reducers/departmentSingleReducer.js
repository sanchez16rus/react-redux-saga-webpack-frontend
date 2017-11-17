import Constants from '../consts';
import Helpers from '../helpers';

/*Reducers for dispatch actions for single Department*/
const departmentSingle = (state = {}, action = {}) => {
    switch (action.type) {
      case Constants.GET_DEPARTMENT_SUCCEEDED:
        // Возвращаем 1 экземпляр 
        return action.payload;
      case Constants.GET_DEPARTMENT_FAILED:
        return { error: action.payload };
      case Constants.CLEAR_DEPARTMENT_SUCCEEDED:
        // Возвращаем новый элемент Department 
        return Helpers.getNewDepartment();
      case Constants.CLEAR_DEPARTMENT_FAILED:
        return { error: action.payload };
      default:
        return state;
    }       
  };

  export default departmentSingle