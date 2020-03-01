import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
  const { isAuthenticated } = props.auth;

  const loginLink = (
    <ul className="nav flex-column">
        <Link to='/login' type="button" className="btn btn-info book-button">Book A Session NOW!</Link>
    </ul>
  );

  const userLink = (
      <ul className="nav flex-column">
        <Link to='/sessions' type="button" className="btn btn-info book-button">Book A Session NOW!</Link>
      </ul>
  );
  return (
    <div className='main main-bar bar'>
      <div className="card mb-3">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt="A man seeking peace" />
        <div className="card-body">
          <h5 className="card-title">Do you need <span className="peace">Peace</span> in this world of chaos?</h5>
          <p className="card-text">If your answer is YES, then we are here to do that. You can discuss the things
          that most matter to you with us. We will let you settle, relax and enjoy your the life you live. It's simple, 
          just book a session with one of our experts in any field you want and we can make all the stress go away. </p>
          { isAuthenticated ? userLink : loginLink }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Home);