import React, { Component} from 'react';
import { Link } from 'react-router'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = { currentItem: "departments" };

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(value) {
        this.setState({currentItem: value});
    }

    render() 
    {
        let items = [{title:'Departments', link:'departments'}, {title:'Employees', link:'employees'}].map((item) => {
            let isActive = this.state.currentItem === item.link;
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
export default Navigation;