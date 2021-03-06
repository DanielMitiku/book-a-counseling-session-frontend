import React from 'react';
import { createAppointment } from '../../actions/appointmentAction';
import { getSession } from '../../actions/sessionAction';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import Loading from '../shared/Loading';



class Book extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      datetime: '',
      errors: {},
    };
    this.state = { ...this.initialState };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentDidMount() {
    const { getSession } = this.props;
    const { id } = this.props.match.params;
    getSession(id);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { createAppointment } = this.props;
    const  { user_id } = this.props.auth;
    const { id } = this.props.match.params;
    if(this.validateForm()) {
      createAppointment({date: this.state.datetime, counseling_id: id}, user_id);
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  validateForm = () => {
    const { datetime } = this.state;
    let errors = {};
    if (!datetime) {
      errors.datetime = 'This field is required';
    }
    this.setState({errors});
    if (isEmpty(errors)) {
      return true;
    }
    return false;
  }

  render() {
    console.log(this.props)
    const { session } = this.props;
    const { datetime, errors } = this.state;
    const { requesting } = this.props.session;
    const loading = <Loading />;

    return (
      <div className='main-bar bar text-center'>
        <h3> Please choose date and time </h3>
        { requesting && loading }
        { session.session && <div className="card col-sm-6 col-12 text-center mx-auto px-2 my-4" style={{width: '25rem'}}>
          <img className="card-img-top" src={session.session.image_url} alt="Counseling Session" />
          <div className="card-body">
            <h5 className="card-title">{session.session.name}</h5>
            <p className="card-text">{session.session.description}</p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="Appointment Date">Appointment Date and Time</label>
              <input type="datetime-local" className={`form-control ${errors.datetime ? "is-invalid" : ""}`} id="datetime" name="datetime" value={datetime} onChange={this.handleChange} />
              <small id="datetimeHelp" className="form-text text-muted">The time you enter should be in UTC+0 format.</small>
              {errors.datetime && <span className={`${errors.datetime ? "invalid-feedback" : ""}`}>{errors.datetime}</span>}
            </div>
            <div className="main">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    session: state.session,
    appointment: state.appointment,
  }
}

export default connect(mapStateToProps, { createAppointment, getSession })(Book);