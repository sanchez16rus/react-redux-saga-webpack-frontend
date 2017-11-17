import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import '../../css/Table.css';
import '../../css/Form.css';
import EmployeeActions from '../actions/employeeActions';

class EmployeeEdit extends Component {

    constructor(props) {
        super(props)
        
        this.handlerFormSubmit = this.handlerFormSubmit.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
      }

    onChangeFirstName(e) {
        var { employee } = this.props;
        employee.firstName = e.target.value;

        this.setState({employee: employee});
    }

    onChangeLastName(e) {
        var { employee } = this.props;
        employee.lastName = e.target.value;

        this.setState({employee: employee});
    }

    onChangeDepartment(e) {
        var { employee } = this.props;
        employee.departmentId = parseInt(e.target.value);
        this.setState({employee: employee});
    }

    handleClearClick(e) {
        this.props.dispatch(EmployeeActions.clearEmployeeSingleAction());
      }

    handlerFormSubmit(e) {
        e.preventDefault();
        var {employee} = this.props;

        if(employee && employee.id > 0)
        {
          this.props.dispatch(EmployeeActions.updateEmployeeAction(employee));
        }
        else{
          this.props.dispatch(EmployeeActions.createEmployeeAction(employee));
        }
      }

  render() {
    return (
      <table className = "tableList tableEdit">
        <thead>
        <tr>
          <th>{ this.props.employee && this.props.employee.id > 0 ?
            <strong>Edit Employee</strong>
            : <strong>Create a new Employee</strong>
            }
         </th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                <form onSubmit={(e) => this.handlerFormSubmit(e)}>
                    <label htmlFor="firstName" className="label">First Name:</label>
                    <input name="firstName" className="textbox" required onChange = {this.onChangeFirstName}
                            value = { this.props.employee.firstName || '' }/>

                    <label htmlFor="lastName" className="label">Last Name:</label>
                    <input name="lastName" className="textbox" required onChange = {this.onChangeLastName}
                            value = { this.props.employee.lastName || ''}/>

                    <label htmlFor="departmentId" className="label">Department:</label>
                    <select name="departmentId" id="id" size="1" className="select" required onChange = {this.onChangeDepartment}
                        value = { this.props.employee.departmentId || 0 } >
                            { 
                                this.props.departmentList.map(item => ( 
                                    <option key={item.id} value={item.id}> {item.name} </option> 
                                ))
                            }
                    </select>

                    <input name="submit" className="button" type="submit" 
                        value = { this.props.employee && this.props.employee.id > 0 ? "Update" : "Create" } />
                    <input type="button" name="clear" value="Clear" className="button button_clear" onClick={this.handleClearClick} />
                </form> 
                </td>
            </tr>
        </tbody>
      </table>
    )
  }
}

EmployeeEdit.propTypes = {
  departmentList: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
  employee:PropTypes.any.isRequired
}

const mapStateToProps = (state) => (
{
  departmentList: state.departments,
  employee: state.employeeSingle
})

export default connect(mapStateToProps)(EmployeeEdit);
