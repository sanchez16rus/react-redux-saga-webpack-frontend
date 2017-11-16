import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import '../../css/Table.css';
import '../../css/Form.css';
import {createDepartmentAction, updateDepartmentAction, clearDepartmentSingleAction} from '../actions/actions';

class DepartmentEdit extends Component {

  constructor(props) {
    super(props)
    
    this.onChangeName = this.onChangeName.bind(this);
    this.handlerFormSubmit = this.handlerFormSubmit.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handlerFormSubmit(e) {
    e.preventDefault();
    var {department} = this.props;

    if(department && department.id > 0)
    {
      this.props.dispatch(updateDepartmentAction(department));
    }
    else{
      this.props.dispatch(createDepartmentAction(department));
    }
  }

  handleClearClick(e) {
    this.props.dispatch(clearDepartmentSingleAction());
  }

  onChangeName(e) {
    var {department} = this.props;
    
    department.name = e.target.value;
    this.setState({department: department});
  }

  render() {
    return (
      <table className = "tableList tableEdit">
        <thead>
        <tr>
          <th>
            <strong>
              { 
                this.props.department && this.props.department.id > 0 
                ? "Edit Department" : "Create a new Department" 
              }
            </strong>
          </th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                <form onSubmit={ (e) => this.handlerFormSubmit(e) }>
                    <label htmlFor="name" className="label">Department name:</label>
                    <input name="name" className="textbox" required onChange={this.onChangeName} value = { this.props.department.name || '' } />
                    <input name="submit" className="button" type="submit" 
                        value={ this.props.department && this.props.department.id > 0 ? "Update" : "Create" } />

                    <input type="button" name="clear" value="Clear" className="button button_clear" onClick={this.handleClearClick} />
                </form> 
                </td>
            </tr>
        </tbody>
      </table>
    )
  }
}

DepartmentEdit.propTypes = {
  dispatch: PropTypes.func.isRequired,
  department: PropTypes.any.isRequired,
}

const mapStateToProps = (state) => (
  {
    departmentList: state.departments,
    department: state.departmentSingle
  })
  

export default connect(mapStateToProps)(DepartmentEdit);
