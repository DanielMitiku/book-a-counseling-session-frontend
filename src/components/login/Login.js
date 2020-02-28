import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { loginUser } from '../../actions/authAction';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      email: '',
      password: '',
      errors: {},
    };
    this.state = { ...this.initialState };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;
    const { loginUser } = this.props;
    if( this.validateForm() ) {
      loginUser({email, password}, history);
      this.setState({ ...this.initialState });
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  validateForm = () => {
    const { email, password } = this.state;
    let errors = {};
    if (!email) {
      errors.email = 'This field is required';
    }
    if (!password) {
      errors.password = 'This field is required';
    }
    this.setState({errors});
    if (isEmpty(errors)) {
      return true;
    }
    return false;
  }

  render() {
    const { email, password, errors } = this.state;
    return (
      <div className="col-md-4 mt-4 offset-4">
        <h2 className="main">Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} id="email" name="email" value={email} onChange={this.handleChange}/>
            {errors.email && <span className={`${errors.email ? "invalid-feedback" : ""}`}>{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} id="password" name="password" value={password} onChange={this.handleChange}/>
            {errors.password && <span className={`${errors.password ? "invalid-feedback" : ""}`}>{errors.password}</span>}
          </div>
          <div className="main">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
          );
        }
        
        }
           
export default connect(null, { loginUser })(Login);
