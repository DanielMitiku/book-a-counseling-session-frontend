import React from 'react';
import { connect } from 'react-redux';
import { getSessions, deleteSession, createSession } from '../../actions/sessionAction';
import jwtDecode from 'jwt-decode';
import { alert_error } from '../../actions/alertAction';
import history from '../../utils/history';
import isEmpty from 'lodash/isEmpty';

class Counselings extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      description: '',
      buttonClicked: false,
      errors: {},
    };
    this.state = { ...this.initialState };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.buttonClickedHandler = this.buttonClickedHandler.bind(this);
  }

  componentWillMount() {
    const is_privileged = jwtDecode(localStorage.jwtToken).is_privileged;
    const { alert_error } = this.props;
    if(!is_privileged) {
      alert_error('Not Authorized')
      history.push('/');
    }
  }

  componentDidMount() {
    const { getSessions } = this.props;
    getSessions();
  }

  handleSubmit = event => {
    event.preventDefault();
    const { createSession } = this.props;
    if(this.validateForm()) {
      createSession({name: this.state.name, description: this.state.description});
      this.buttonClickedHandler();
      this.setState({...this.initialState});
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  validateForm = () => {
    const { name, description } = this.state;
    let errors = {};
    if (!name) {
      errors.name = 'This field is required';
    }
    if (!description) {
      errors.description = 'This field is required';
    }
    this.setState({errors});
    if (isEmpty(errors)) {
      return true;
    }
    return false;
  }

  deleteHandler = (session_id) => {
    const { deleteSession } = this.props;
    deleteSession(session_id);
  }

  buttonClickedHandler = () => {
    this.setState({...this.state,
    buttonClicked: !this.state.buttonClicked})
  }

  render() {
    const { session } = this.props;
    const { name, description, buttonClicked, errors } = this.state;
    const loading = (<div className="d-flex justify-content-center">
                      <div className="spinner-border text-primary" role="status">
                       <span className="sr-only">Loading...</span>
                      </div>
                    </div>);
    const createSessionForm = (
      <div className="col-md-5 mt-3 ml-4 create-session-form">
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="Session Name">Session Name</label>
          <input type="text" className={`form-control ${errors.name ? "is-invalid" : ""}`} id="name" name="name" value={name} onChange={this.handleChange} />
          {errors.name && <span className={`${errors.name ? "invalid-feedback" : ""}`}>{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="Session Description">Session Description</label>
          <textarea className={`form-control ${errors.description ? "is-invalid" : ""}`} id="description" name="description" value={description} onChange={this.handleChange} rows="3"></textarea>
          {errors.description && <span className={`${errors.description ? "invalid-feedback" : ""}`}>{errors.description}</span>}
        </div>
        <div className="main">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>
    );
    return (
      <div className='main-bar bar'>
        <h3 className='text-center'>Sessions List</h3>
        {session.requesting && loading}
        <button type="button" className="ml-4 btn btn-info" onClick={this.buttonClickedHandler}>Create Session</button>
        { buttonClicked && createSessionForm }
        <div className='row'>
        { session.sessions && session.sessions.map(s => {
          return (
            <div key={s.id} className="card col-md-5 text-center mx-4 my-4" style={{width: '25rem'}}>
              <img className="card-img-top" src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt="Counseling Session" />
              <div className="card-body">
                <h5 className="card-title">{s.name}</h5>
                <p className="card-text">{s.description}</p>
                <button type="button" className="btn btn-sm btn-danger" onClick={() => {this.deleteHandler(s.id)}}>Remove Session</button>
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

export default connect(mapStateToProps, { createSession, getSessions, deleteSession, alert_error })(Counselings);