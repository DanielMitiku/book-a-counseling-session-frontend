import React from 'react';
import { connect } from 'react-redux';

const Flash = ({alert}) => {
  return (
    <div className={`col-md-4 offset-4 alert ${alert.type}`}>
      {`${alert.message ? (alert.type === "alert-danger" ? "Invalid" : "Success") : ""}`}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    alert: state.alert
  }
}

export default connect(mapStateToProps)(Flash);