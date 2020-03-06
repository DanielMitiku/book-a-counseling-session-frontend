import React from 'react';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../../actions/userAction';
import { alert_error } from '../../actions/alertAction';
import history from '../../utils/history';
import jwtDecode from 'jwt-decode';


class Users extends React.Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentWillMount() {
    if (localStorage.jwtToken) {
      const is_privileged = jwtDecode(localStorage.jwtToken).is_privileged;
      const { alert_error } = this.props;
      if(!is_privileged) {
        alert_error('Not Authorized')
        history.push('/');
      }
    }
  }

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  deleteHandler = (user_id) => {
    const { deleteUser } = this.props;
    deleteUser(user_id);
  }

  render() {
    const { user } = this.props;
    const loading = (<div className="d-flex justify-content-center">
                      <div className="spinner-border text-primary" role="status">
                       <span className="sr-only">Loading...</span>
                      </div>
                    </div>);
    return (
      <div className='main-bar bar'>
  <h3 className='text-center'>User List<small className="text-muted"> {user.users.length} users total</small></h3>
        { user.requesting && loading}
        <div className='row'>
        { user.users && user.users.map(u => {
          return (
            <div key={u.id} className="card col-md-5 text-center mx-4 my-4" style={{width: '25rem'}}>
              <div className="card-body">
                <h5 className="card-title">{u.first_name} {u.last_name}</h5>
                <p className="card-text">{u.email}</p>
                <button type="button" className="btn btn-sm btn-danger" onClick={() => {this.deleteHandler(u.id)}}>Remove User</button>
              </div>
            </div>
          );
        }
        )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, { getUsers, deleteUser, alert_error })(Users);