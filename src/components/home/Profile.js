import React from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { getUser } from '../../actions/userAction';

class Profile extends React.Component {
  componentDidMount() {
    if (localStorage.jwtToken) {
      const { user_id } = jwtDecode(localStorage.jwtToken);
      const { getUser } = this.props;
      getUser(user_id);
    }
  }

  render() {
    const { user } = this.props;
    const loading = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
    return (
      <div className="main-bar bar">
        <h3 className="text-center">Your Profile</h3>
        { user.requesting && loading}
        {user.user
        && (
        <div className="col-md-4 offset-3">
          <div className="card text-center mx-4 my-4" style={{ width: '25rem' }}>
            <div className="card-body">
              <h5 className="card-title">
                {user.user.first_name}
                {' '}
                {user.user.last_name}
              </h5>
              <p className="card-text">{user.user.email}</p>
            </div>
          </div>
        </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUser })(Profile);
