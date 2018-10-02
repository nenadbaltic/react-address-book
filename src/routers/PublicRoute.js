import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Logo from '../components/Logo';

export const PublicRoute = ({isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route {...rest}  component={ (props) => {
                return (
                    isAuthenticated ?
                    <Redirect to="/contacts"/>
                    :
                    <div>
                        <div className="header"><Logo /></div>
                        <Component {...props}/>
                    </div>
                );
            } 
        }/>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: Boolean(state.auth.uid)
    }
};

export default connect(mapStateToProps)(PublicRoute);