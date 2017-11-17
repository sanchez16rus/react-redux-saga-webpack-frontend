import { watchSetNavigationItem, watchGetDepartmentList, watchCreateDepartment,
    watchUpdateDepartment, watchDeleteDepartment, watchGetEmployeeList,
    watchCreateEmployee, watchUpdateEmployee, watchDeleteEmployee,
    watchGetEmployeeSingle, watchClearEmployeeSingle, watchGetDepartmentSingle,
    watchClearDepartmentSingle} from './sagas';

/*ROOT SAGA*/
export default function* rootSaga() {
    yield [
        watchGetDepartmentList(),
        watchCreateDepartment(),
        watchUpdateDepartment(),
        watchDeleteDepartment(),
        watchGetEmployeeList(),
        watchCreateEmployee(),
        watchUpdateEmployee(),
        watchDeleteEmployee(),
        watchGetEmployeeSingle(),
        watchClearEmployeeSingle(),
        watchGetDepartmentSingle(),
        watchClearDepartmentSingle()
    ];
  }
  