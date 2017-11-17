import Constants from '../consts';
import Helpers from '../helpers';

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
        return Helpers.changeItemInArray(state, action.payload);
      case Constants.UPDATE_DEPARTMENT_FAILED:
        return { error: action.payload };
      case Constants.DELETE_DEPARTMENT_SUCCEEDED:
        // После Удаления по Id пришедший в payload исключаем из текущего списка
        // Возвращаем массив без удаленного
        return Helpers.removeItemFromArray(state, action.payload);
      case Constants.DELETE_DEPARTMENT_FAILED:
        return { error: action.payload };
      default:
        return state;
    }       
  };

export default departments