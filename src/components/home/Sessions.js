import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSessions } from '../../actions/sessionAction';


class Sessions extends React.Component {
  componentDidMount() {
    const { getSessions } = this.props;
    getSessions();
  }

  render() {
    const { session } = this.props;
    const loading = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
    return (
      <div className="main-bar bar">
        <h3 className="text-center">Currently Available Sessions</h3>
        { session.requesting && loading}
        <div className="row">
          { session.sessions && session.sessions.map(s => (
            <div key={s.id} className="card col-md-5 text-center mx-4 my-4" style={{ width: '25rem' }}>
              <img className="card-img-top" height="300" src={s.image_url} alt="Counseling Session" />
              <div className="card-body">
                <h5 className="card-title">{s.name}</h5>
                <p className="card-text">{s.description}</p>
                <Link to={`/sessions/${s.id}`} type="button" className="btn btn-info">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  session: state.session,
});

export default connect(mapStateToProps, { getSessions })(Sessions);
