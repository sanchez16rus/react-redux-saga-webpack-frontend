import {combineReducers} from 'redux';
import Constants from '../consts/consts';
import {changeItemInArray, removeItemFromArray, getNewEmployee, getNewDepartment} from '../helpers/helpers';

/*Reducers for dispatch actions for Department*/
const departments = (state = [], action = {}) => {
  switch (action.type) {
    case Constants.GET_LIST_DEPARTMENT_SUCCEEDED:
      // Возвращаем Список [] полученных объектов
      return action.payload;
    case Constants.GET_LIST_DEPARTMENT_FAILED:
      return { error: action.payload };
    case Constants.CREATE_DEPARTMENT_SUCCEEDED:
      // Возвращаем Список Текущих объектов [] + Новый объект, пришедший в payload
      return [...state, action.payload]; 
    case Constants.CREATE_DEPARTMENT_FAILED:
      return { error: action.payload };
    case Constants.UPDATE_DEPARTMENT_SUCCEEDED:
      // Ищем пришедший объект в payload среди уже имеющихся в списке объектов 
      // Заменяем его и возвращаем итоговый массив [] уже с обновленным объектом
      return changeItemInArray(state, action.payload);
    case Constants.UPDATE_DEPARTMENT_FAILED:
      return { error: action.payload };
    case Constants.DELETE_DEPARTMENT_SUCCEEDED:
      // После Удаления по Id пришедший в payload исключаем из текущего списка
      // Возвращаем массив без удаленного
      return removeItemFromArray(state, action.payload);
    case Constants.DELETE_DEPARTMENT_FAILED:
      return { error: action.payload };
    default:
      return state;
  }       
};

/*Reducers for dispatch actions for Employee*/
const employees = (state = [], action = {}) => {
  switch (action.type) {
    case Constants.GET_LIST_EMPLOYEE_SUCCEEDED:
      // Возвращаем Список [] полученных объектов
      return action.payload;
    case Constants.GET_LIST_EMPLOYEE_FAILED:
      return { error: action.payload };
    case Constants.CREATE_EMPLOYEE_SUCCEEDED:
      // Возвращаем Список Текущих объектов [] + Новый объект, пришедший в payload
      return [...state, action.payload]; 
    case Constants.CREATE_EMPLOYEE_FAILED:
      return { error: action.payload };
    case Constants.UPDATE_EMPLOYEE_SUCCEEDED:
      // Ищем входящий объект в payload среди уже имеющихся в списке объектов 
      // Заменяем его и возвращаем итоговый массив [] уже с обновленным объектом
      return changeItemInArray(state, action.payload);
    case Constants.UPDATE_EMPLOYEE_FAILED:
      return { error: action.payload };
    case Constants.DELETE_EMPLOYEE_SUCCEEDED:
      // После Удаления по Id пришедший в payload исключаем из текущего списка
      // Возвращаем массив без удаленного
      return removeItemFromArray(state, action.payload); 
    case Constants.DELETE_EMPLOYEE_FAILED:
      return { error: action.payload };
    default:
      return state;
  }       
};

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
      return getNewDepartment();
    case Constants.CLEAR_DEPARTMENT_FAILED:
      return { error: action.payload };
    default:
      return state;
  }       
};


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
      return getNewEmployee();
    case Constants.CLEAR_EMPLOYEE_FAILED:
      return { error: action.payload };
    default:
      return state;
  }       
};

/*Reducers for dispatch actions for Navigation*/
const currentNavigationItem = (state='departments', action = {}) => {
  switch (action.type) {
    case Constants.SET_NAVIGATION_ITEM_SUCCEEDED:
      return action.payload;
    case Constants.SET_NAVIGATION_ITEM_FAILED:
      return { error: action.payload };
    default:
      return state;
  }       
};

/*All Reducers for dispatch actions in the combined*/
const reducers = combineReducers({
  departments,
  employees,
  departmentSingle,
  employeeSingle,
  currentNavigationItem
});
  
export default reducers;