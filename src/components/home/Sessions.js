import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSessions } from '../../actions/sessionAction';
import Loading from '../shared/Loading';


class Sessions extends React.Component {
  componentDidMount() {
    const { getSessions } = this.props;
    getSessions();
  }

  render() {
    const { session } = this.props;
    const loading = <Loading />;
    
    return (
      <div className="main-bar bar">
        <h3 className="text-center">Currently Available Sessions</h3>
        { session.requesting && loading}
        <div className="row">
          { session.sessions && session.sessions.map(s => (
            <div key={s.id} className="card col-sm-6 col-12 text-center mx-auto px-2 my-4" style={{ width: '25rem' }}>
              <img className="card-img-top" src={s.image_url} alt="Counseling Session" />
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
