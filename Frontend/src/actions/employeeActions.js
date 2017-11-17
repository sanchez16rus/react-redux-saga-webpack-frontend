import Constants from '../consts';

export default {
    /*Employee actions*/
    getEmployeeListAction: () => ({ type: Constants.GET_LIST_EMPLOYEE }),
    createEmployeeAction: (value) => ({ type: Constants.CREATE_EMPLOYEE, payload: value }),
    updateEmployeeAction: (value) => ({ type: Constants.UPDATE_EMPLOYEE, payload: value }),
    deleteEmployeeAction: (id) => ({ type: Constants.DELETE_EMPLOYEE, payload: id }),
    getEmployeeSingleAction: (value) => ({ type: Constants.GET_EMPLOYEE,  payload: value}),
    clearEmployeeSingleAction: () => ({ type: Constants.CLEAR_EMPLOYEE})
}