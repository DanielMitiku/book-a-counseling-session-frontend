import React from 'react';
import { connect } from 'react-redux';
import { getSessions } from '../../actions/sessionAction';
import { Link } from 'react-router-dom';


class Sessions extends React.Component {
  componentDidMount() {
    const { getSessions } = this.props;
    getSessions();
  }
  render() {
    const { session } = this.props;
    const loading = (<div class="d-flex justify-content-center">
                      <div className="spinner-border text-primary" role="status">
                       <span className="sr-only">Loading...</span>
                      </div>
                    </div>);
    return (
      <div className='main-bar bar'>
        <h3 className='text-center'>Currently Available Sessions</h3>
        { session.requesting && loading}
        <div className='row'>
        { session.sessions && session.sessions.map(s => {
          return (
            <div key={s.id} className="card col-md-5 text-center mx-4 my-4" style={{width: '25rem'}}>
              <img className="card-img-top" src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt="Counseling Session" />
              <div className="card-body">
                <h5 className="card-title">{s.name}</h5>
                <p className="card-text">{s.description}</p>
                <Link to={`/sessions/${s.id}`} type="button" className="btn btn-info">Book Now</Link>
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
    session: state.session,
  }
}

export default connect(mapStateToProps, { getSessions })(Sessions);