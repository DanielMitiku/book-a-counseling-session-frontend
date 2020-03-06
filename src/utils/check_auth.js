import React from 'react';
import { connect } from 'react-redux';
import { alert_error } from '../actions/alertAction';
import history from './history';

export default function(Component) {
  class CheckAuth extends React.Component {
    componentWillMount() {
      if (!this.props.isAuthenticated && !localStorage.jwtToken) {
        this.props.alert_error('Please login to access the site');
        history.push('/login');
      }
    }

    render() {
      return (
        <Component {...this.props} />
      );
    }
  }


  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(mapStateToProps, { alert_error })(CheckAuth);
}