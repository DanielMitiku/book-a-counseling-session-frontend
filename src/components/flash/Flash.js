import React from 'react';
import { connect } from 'react-redux';

// const Flash = ({alert}) => {
//   if(alert.type) {
//     return (
//       <div className={`col-md-4 offset-4 alert ${alert.type}`}>
//         {`${alert.message ? (alert.type === "alert-danger" ? "Invalid" : "Success") : ""}`}
//       </div>
//     );
//   } else {
//     return null;
//   }
// };
class Flash extends React.Component {
  render() {
    const { alert } = this.props;
    if(alert.type) {
      return (
        <div className={`col-md-4 offset-4 alert ${alert.type}`}>
          {`${alert.message ? (alert.type === "alert-danger" ? "Invalid" : "Success") : ""}`}
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    alert: state.alert
  }
}

export default connect(mapStateToProps)(Flash);