import React from 'react'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
    this.state = { ...this.initialState };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, password, password_confirmation } = this.state;
    if( firstName && lastName && email && password && password_confirmation ) {
      //fire_action
      this.setState({ ...this.initialState });
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { firstName, lastName, email, password, password_confirmation } = this.state;
    return (
      <div className="col-md-4 mt-4 offset-4">
        <h2 className="main">Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label for="firstName">First Name</label>
              <input type="text" className="form-control" id="firstName" name="firstName" value={firstName} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" className="form-control" id="lastName" name="lastName" value={lastName} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label for="email">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={email} onChange={this.handleChange}/>
              <small id="emailHelp" className="form-text text-muted">Your email is safe in our hands.</small>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={password} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label for="passwordConfirmation">Password Confirmation</label>
            <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" value={password_confirmation} onChange={this.handleChange}/>
          </div>
          <div class="main">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
        
}
           
export default SignUp;
