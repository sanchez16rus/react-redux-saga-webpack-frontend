import React, { Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import Navigation from '../components/Navigation';
import {getNavigationItem} from '../actions/actions';
import '../../css/App.css';

class App extends Component {

    render() {
        //<Navigation/>
        return (
            <div className="div_main">
                <div className="div_header">
                    <br/>
                    <h2>Departments & Employees</h2>
                </div>

                <div className="div_left">
                    <br/>
                    <br/>
                    <Navigation />
                </div>

                <div className="div_right">
                    <div className="div_grid">
                            {this.props.children}
                    </div>
                </div>
                
                <div className="div_clear">
                
                </div>
                <div className="div_footer">
                    
                </div>
            </div>
        )
    }
}

export default connect()(App);