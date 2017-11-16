import React, { Component} from 'react';
import { Link } from 'react-router'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setNavigationItemAction} from '../actions/actions';

class Navigation extends Component {

    handleItemClick(value) {
        this.props.dispatch(setNavigationItemAction(value));
    }

    render() 
    {
        let items = [{title:'Departments', link:'departments'}, {title:'Employees', link:'employees'}].map((item) => {
            let isActive = this.props.currentNavigationItem === item.link;
        
            return (
                <div key={item.link} className={`navigation-item-div ${isActive ? 'navigation-item-div-active': ''}`}>
                    &nbsp;&nbsp;<Link className="navigation-link" to={item.link} onClick={(e) => this.handleItemClick(item.link)}>{item.title}</Link>
                </div>
                );
            });
    
        return (
            <div className="navigation-bar">
                {items}
            </div>
        );
    }
}

Navigation.propTypes = {
  currentNavigationItem: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => (
{
  currentNavigationItem: state.currentNavigationItem
})

export default connect(mapStateToProps)(Navigation);