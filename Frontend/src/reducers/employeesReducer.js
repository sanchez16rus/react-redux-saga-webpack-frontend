import Constants from '../consts';
import Helpers from '../helpers';

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
        return Helpers.changeItemInArray(state, action.payload);
      case Constants.UPDATE_EMPLOYEE_FAILED:
        return { error: action.payload };
      case Constants.DELETE_EMPLOYEE_SUCCEEDED:
        // После Удаления по Id пришедший в payload исключаем из текущего списка
        // Возвращаем массив без удаленного
        return Helpers.removeItemFromArray(state, action.payload); 
      case Constants.DELETE_EMPLOYEE_FAILED:
        return { error: action.payload };
      default:
        return state;
    }       
  };

  export default employees