import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Logout = (props) => {
    return (
        <li onClick={props.startLogout} className="logout">Logout</li>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    }
}

export default connect(undefined, mapDispatchToProps)(Logout);