import Constants from '../consts';

export default {
    /*Department actions*/
    getDepartmentListAction: () => ({ type: Constants.GET_LIST_DEPARTMENT }),
    createDepartmentAction: (value) => ({ type: Constants.CREATE_DEPARTMENT, payload: value }),
    updateDepartmentAction: (value) => ({ type: Constants.UPDATE_DEPARTMENT, payload: value }),
    deleteDepartmentAction: (id) => ({ type: Constants.DELETE_DEPARTMENT, payload: id }),
    getDepartmentSingleAction: (value) => ({ type: Constants.GET_DEPARTMENT, payload: value }),
    clearDepartmentSingleAction: () => ({ type: Constants.CLEAR_DEPARTMENT})
}