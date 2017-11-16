import Constants from '../consts/consts';

/*Navigation actions*/
export const setNavigationItemAction = (value) => ({ type: Constants.SET_NAVIGATION_ITEM, payload: value });

/*Department actions*/
export const getDepartmentListAction = () => ({ type: Constants.GET_LIST_DEPARTMENT });
export const createDepartmentAction = (value) => ({ type: Constants.CREATE_DEPARTMENT, payload: value });
export const updateDepartmentAction = (value) => ({ type: Constants.UPDATE_DEPARTMENT, payload: value });
export const deleteDepartmentAction = (id) => ({ type: Constants.DELETE_DEPARTMENT, payload: id });

/*Employees actions*/
export const getEmployeeListAction = () => ({ type: Constants.GET_LIST_EMPLOYEE });
export const createEmployeeAction = (value) => ({ type: Constants.CREATE_EMPLOYEE, payload: value });
export const updateEmployeeAction = (value) => ({ type: Constants.UPDATE_EMPLOYEE, payload: value });
export const deleteEmployeeAction = (id) => ({ type: Constants.DELETE_EMPLOYEE, payload: id });

/*Astions for single Employee state (clear or get)*/
export const getEmployeeSingleAction = (value) => ({ type: Constants.GET_EMPLOYEE,  payload: value});
export const clearEmployeeSingleAction = () => ({ type: Constants.CLEAR_EMPLOYEE});

/*Astions for single Department state (clear or get)*/
export const getDepartmentSingleAction = (value) => ({ type: Constants.GET_DEPARTMENT, payload: value });
export const clearDepartmentSingleAction = () => ({ type: Constants.CLEAR_DEPARTMENT});