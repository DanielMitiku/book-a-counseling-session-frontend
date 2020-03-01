import React from 'react';
import { connect } from 'react-redux';
import { getSessions } from '../../actions/userAction';
import { Link } from 'react-router-dom';


class Sessions extends React.Component {
  componentDidMount() {
    const { getSessions } = this.props;
    getSessions();
  }
  render() {
    const { user } = this.props;
    return (
      <div className='main-bar bar'>
        <h3 className='text-center'>Currently Available Sessions</h3>
        <div className='row'>
        { user.sessions.map(session => {
          return (
            <div key={session.id} className="card col-md-5 text-center mx-4 my-4" style={{width: '25rem'}}>
              <img className="card-img-top" src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt="Counseling Session" />
              <div className="card-body">
                <h5 className="card-title">{session.name}</h5>
                <p className="card-text">{session.description}</p>
                <Link to='/sessions/book' type="button" className="btn btn-info">Book Now</Link>
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

export default connect(mapStateToProps, { getSessions })(Sessions);