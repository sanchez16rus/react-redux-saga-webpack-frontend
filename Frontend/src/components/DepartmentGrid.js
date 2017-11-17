import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DepartmentEdit from './DepartmentEdit';

import DepartmentActions from '../actions/deparmentActions';
import '../../css/Table.css';

class DepartmentGrid extends Component {

  componentWillMount() {
    this.props.dispatch(DepartmentActions.getDepartmentListAction());
  }

  handleEditClick(value) {
    this.props.dispatch(DepartmentActions.getDepartmentSingleAction(value));
  }

  handleDeleteClick(value) {
    this.props.dispatch(DepartmentActions.deleteDepartmentAction(value.id));
  }

  render() {

    let items = this.props.departmentList.map((item) => {
      let isEditing = this.props.department.id === item.id;

      return (
        <tr key={item.id} className={ isEditing ? 'tr_editing': '' }>
          <td className="td_id">{ item.id }</td>
          <td>{item.name}</td>
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
            <td className = "table-groupp-td-grid">
            <table className = "tableList">
            <thead>
            <tr>
              <th><strong>Id</strong></th>
              <th><strong>Name</strong></th>
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
            <DepartmentEdit/>
            </td>
          </tr>
        </tbody>  
      </table>
    )
  }
}

DepartmentGrid.propTypes = {
  departmentList: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
  department: PropTypes.any.isRequired,
}

const mapStateToProps = (state) => (
{
  departmentList: state.departments,
  department: state.departmentSingle
})

export default connect(mapStateToProps)(DepartmentGrid);
