import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import EmployeeEdit from './EmployeeEdit';

import {getEmployeeListAction, deleteEmployeeAction, getEmployeeSingleAction} from '../actions/actions';
import '../../css/Table.css';
class EmployeeGrid extends Component {

  componentWillMount() {
    this.props.dispatch(getEmployeeListAction());
  }

  handleEditClick(value) {
    this.props.dispatch(getEmployeeSingleAction(value));
  }

  handleDeleteClick(value) {
    this.props.dispatch(deleteEmployeeAction(value.id));
  }

  render() {

    let findDepartmentName = (empl) => {
      let department = this.props.departmentList.filter(dep => {
        return dep.id == empl.departmentId; 
      });
      if(department && department.length > 0)
      {
        return department[0].name;
      }

      return empl.departmentId;
    };

    let items = this.props.employeeList.map((item) => {
      let isEditing = this.props.employee.id == item.id;

      return (
        <tr key={item.id} className={ isEditing ? 'tr_editing': '' }>
          <td className="td_id">{ item.id }</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{findDepartmentName(item)}</td>
          <td className={`td_action ${isEditing ? '': 'td_delete'}`} 
              onClick={ isEditing ? (e)=>{/*Что бы не удалили редактируемый объект*/} : (e) => this.handleDeleteClick(item)}>
              { isEditing ? <strong/> : <strong>Delete</strong>}
          </td>
          <td className={`td_action ${isEditing ? '': 'td_edit'}`} 
              onClick={isEditing ? (e)=>{/*Что бы не выбрали уже выбранный объект*/} : (e) => this.handleEditClick(item)}>
              { isEditing ? <strong/> : <strong>Edit</strong>}
          </td>
        </tr>
          );
      });

    return (
      <table className="tableGrouping">
        <tbody>
          <tr>
            <td className="table-groupp-td-grid">
            <table className = "tableList">
            <thead>
            <tr>
              <th><strong>Id</strong></th>
              <th><strong>First Name</strong></th>
              <th><strong>Last Name</strong></th>
              <th><strong>Department</strong></th>
              <th><strong>Delete</strong></th>
              <th><strong>Edit</strong></th>
            </tr>
            </thead>
            <tbody>
              { items }
            </tbody>
          </table>
            </td>
            
            <td className="table-groupp-td-edit">
            <EmployeeEdit />
            </td>
          </tr>
        </tbody>  
      </table>
    )
  }
}

EmployeeGrid.propTypes = {
  departmentList: PropTypes.any.isRequired,
  employeeList: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
  employee:PropTypes.any.isRequired
}

const mapStateToProps = (state) => (
{
  departmentList: state.departments,
  employeeList: state.employees,
  employee: state.employeeSingle
})

export default connect(mapStateToProps)(EmployeeGrid);
