import React from 'react'
import isEmpty from 'lodash/isEmpty';
import { signupUser } from '../../actions/signupAction';
import { connect } from 'react-redux';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {},
    };
    this.state = { ...this.initialState };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { signupUser } = this.props;
    if( this.validateForm() ) {
      signupUser(this.state);
      // this.setState({ ...this.initialState });
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  validateForm = () => {
    const { firstName, lastName, email, password, password_confirmation } = this.state;
    let errors = {};
    if (!firstName) {
      errors.firstName = 'This field is required';
    }
    if (!lastName) {
      errors.lastName = 'This field is required';
    }
    if (!email) {
      errors.email = 'This field is required';
    }
    if (!password) {
      errors.password = 'This field is required';
    }
    if (!password_confirmation) {
      errors.password_confirmation = 'This field is required';
    }
    if ( password !== password_confirmation ) {
      errors.password_confirmation = "Passwords don't match";
    }
    this.setState({errors});
    if (isEmpty(errors)) {
      return true;
    }
    return false;
  }

  render() {
    const { firstName, lastName, email, password, password_confirmation, errors } = this.state;
    return (
      <div className="col-md-4 mt-4 offset-4">
        <h2 className="main">Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className={`form-control ${errors.firstName ? "is-invalid" : ""}`} id="firstName" name="firstName" value={firstName} onChange={this.handleChange}/>
              {errors.firstName && <span className={`${errors.firstName ? "invalid-feedback" : ""}`}>{errors.firstName}</span>}
          </div>
          <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className={`form-control ${errors.lastName ? "is-invalid" : ""}`} id="lastName" name="lastName" value={lastName} onChange={this.handleChange}/>
              {errors.lastName && <span className={`${errors.lastName ? "invalid-feedback" : ""}`}>{errors.lastName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} id="email" name="email" value={email} onChange={this.handleChange}/>
              <small id="emailHelp" className="form-text text-muted">Your email is safe in our hands.</small>
              {errors.email && <span className={`${errors.email ? "invalid-feedback" : ""}`}>{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} id="password" name="password" value={password} onChange={this.handleChange}/>
            {errors.password && <span className={`${errors.password ? "invalid-feedback" : ""}`}>{errors.password}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input type="password" className={`form-control ${errors.password_confirmation ? "is-invalid" : ""}`} id="password_confirmation" name="password_confirmation" value={password_confirmation} onChange={this.handleChange}/>
            {errors.password_confirmation && <span className={`${errors.password_confirmation ? "invalid-feedback" : ""}`}>{errors.password_confirmation}</span>}
          </div>
          <div className="main">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
        
}
           
export default connect(null, { signupUser })(Signup);
