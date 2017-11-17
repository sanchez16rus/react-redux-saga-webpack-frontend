import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import Constants from '../consts';

const urlConfig = () => ({
    departmentsUrl: 'http://localhost:3000/departments',
    employeesUrl: 'http://localhost:3000/employees'
});

/*GET_DEPARTMENT*/
export function* getDepartmentSingleAsync(action) {
  try {
    const response = yield call(axios.get, urlConfig().departmentsUrl+"/"+action.payload.id);
    yield put({ type: Constants.GET_DEPARTMENT_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: Constants.GET_DEPARTMENT_FAILED, payload: e.message });
  }
}
  
export function* watchGetDepartmentSingle() {
  yield takeEvery(Constants.GET_DEPARTMENT, getDepartmentSingleAsync);
}

/*CLEAR_DEPARTMENT*/
export function* clearDepartmentSingleAsync(action) {
  try {
    yield put({ type: Constants.CLEAR_DEPARTMENT_SUCCEEDED });
  } catch (e) {
    yield put({ type: Constants.CLEAR_DEPARTMENT_FAILED, payload: e.message });
  }
}
  
export function* watchClearDepartmentSingle() {
  yield takeEvery(Constants.CLEAR_DEPARTMENT, clearDepartmentSingleAsync);
}

/*GET_EMPLOYEE*/
export function* getEmployeeSingleAsync(action) {
  try {
    const response = yield call(axios.get, urlConfig().employeesUrl+"/"+action.payload.id);
    yield put({ type: Constants.GET_EMPLOYEE_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: Constants.GET_EMPLOYEE_FAILED, payload: e.message });
  }
}
  
export function* watchGetEmployeeSingle() {
  yield takeEvery(Constants.GET_EMPLOYEE, getEmployeeSingleAsync);
}

/*CLEAR_EMPLOYEE*/
export function* clearEmployeeSingleAsync(action) {
  try {
    yield put({ type: Constants.CLEAR_EMPLOYEE_SUCCEEDED });
  } catch (e) {
    yield put({ type: Constants.CLEAR_EMPLOYEE_FAILED, payload: e.message });
  }
}
  
export function* watchClearEmployeeSingle() {
  yield takeEvery(Constants.CLEAR_EMPLOYEE, clearEmployeeSingleAsync);
}

/*GET_LIST_DEPARTMENT*/
export function* getDepartmentListAsync() {
  try {
    const response = yield call(axios.get, urlConfig().departmentsUrl);
    yield put({ type: Constants.GET_LIST_DEPARTMENT_SUCCEEDED, payload: response.data });

    // Отправляю дополнительно CLEAR для объекта редактирования Department, поскольку после обновления списка объект мог быть удален и его не будет в списке 
    yield put({ type: Constants.CLEAR_DEPARTMENT });
  } catch (e) {
    yield put({ type: Constants.GET_LIST_DEPARTMENT_FAILED, payload: e.message });
  }
}
  
export function* watchGetDepartmentList() {
  yield takeEvery(Constants.GET_LIST_DEPARTMENT, getDepartmentListAsync);
}

/*CREATE_DEPARTMENT*/
export function* createDepartmentAsync(action) {
  try {
    const response = yield call(axios.post, urlConfig().departmentsUrl, action.payload);
    yield put({ type: Constants.CREATE_DEPARTMENT_SUCCEEDED, payload: response.data });
    // Отправляю дополнительно CLEAR, чтобы после Create сбросить состояние выбранного объекта для нового добавления 
    yield put({ type: Constants.CLEAR_DEPARTMENT });
  } catch (e) {
    yield put({ type: Constants.CREATE_DEPARTMENT_FAILED, payload: e.message });
  }
}
  
export function* watchCreateDepartment() {
  yield takeEvery(Constants.CREATE_DEPARTMENT, createDepartmentAsync);
}

/*UPDATE_DEPARTMENT*/
export function* updateDepartmentAsync(action) {
  try {
    const response = yield call(axios.put, urlConfig().departmentsUrl+"/"+action.payload.id, action.payload);

    yield put({ type: Constants.UPDATE_DEPARTMENT_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: Constants.UPDATE_DEPARTMENT_FAILED, payload: e.message });
  }
}
  
export function* watchUpdateDepartment() {
  yield takeEvery(Constants.UPDATE_DEPARTMENT, updateDepartmentAsync);
}

/*DELETE_DEPARTMENT*/
export function* deleteDepartmentAsync(action) {
  try {
    const response = yield call(axios.delete, urlConfig().departmentsUrl+"/"+action.payload);
    yield put({ type: Constants.DELETE_DEPARTMENT_SUCCEEDED, payload: action.payload });
  } catch (e) {
    yield put({ type: Constants.DELETE_DEPARTMENT_FAILED, payload: e.message });
  }
}
  
export function* watchDeleteDepartment() {
  yield takeEvery(Constants.DELETE_DEPARTMENT, deleteDepartmentAsync);
}

/*GET_LIST_EMPLOYEE*/
export function* getEmployeeListAsync() {
  try {
    const response = yield call(axios.get, urlConfig().employeesUrl);
    yield put({ type: Constants.GET_LIST_EMPLOYEE_SUCCEEDED, payload: response.data });

    // Отправляю дополнительно CLEAR для объекта редактирования Department, поскольку после обновления списка объект мог быть удален и его не будет в списке 
    yield put({ type: Constants.CLEAR_EMPLOYEE });
  } catch (e) {
    yield put({ type: Constants.GET_LIST_EMPLOYEE_FAILED, payload: e.message });
  }
}
export function* watchGetEmployeeList() {
  yield takeEvery(Constants.GET_LIST_EMPLOYEE, getEmployeeListAsync);
}

/*CREATE_EMPLOYEE*/
export function* createEmployeeAsync(action) {
  try {
    const response = yield call(axios.post, urlConfig().employeesUrl, action.payload);
    yield put({ type: Constants.CREATE_EMPLOYEE_SUCCEEDED, payload: response.data });
    // Отправляю дополнительно CLEAR, чтобы после Create сбросить состояние выбранного объекта для нового добавления  
    yield put({ type: Constants.CLEAR_EMPLOYEE });
  } catch (e) {
    yield put({ type: Constants.CREATE_EMPLOYEE_FAILED, payload: e.message });
  }
}
  
export function* watchCreateEmployee() {
  yield takeEvery(Constants.CREATE_EMPLOYEE, createEmployeeAsync);
}

/*UPDATE_EMPLOYEE*/
export function* updateEmployeeAsync(action) {
  try {
    const response = yield call(axios.put, urlConfig().employeesUrl+"/"+action.payload.id, action.payload);
    yield put({ type: Constants.UPDATE_EMPLOYEE_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: Constants.UPDATE_EMPLOYEE_FAILED, payload: e.message });
  }
}
  
export function* watchUpdateEmployee() {
  yield takeEvery(Constants.UPDATE_EMPLOYEE, updateEmployeeAsync);
}

/*DELETE_EMPLOYEE*/
export function* deleteEmployeeAsync(action) {
  try {
    const response = yield call(axios.delete, urlConfig().employeesUrl+"/"+action.payload);
    yield put({ type: Constants.DELETE_EMPLOYEE_SUCCEEDED, payload: action.payload });
  } catch (e) {
    yield put({ type: Constants.DELETE_EMPLOYEE_FAILED, payload: e.message });
  }
}
  
export function* watchDeleteEmployee() {
  yield takeEvery(Constants.DELETE_EMPLOYEE, deleteEmployeeAsync);
}