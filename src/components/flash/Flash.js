import React from 'react';
import { connect } from 'react-redux';
import { alert_clear } from '../../actions/alertAction';


class Flash extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.alert_clear();
  }

  render() {
    const { alert } = this.props;
    if(alert.type) {
      return (
        <div className={`col-md-4 text-center offset-4 alert ${alert.type}`}>
          {alert.message}
          <button onClick={this.onClick} className="close"><span>&times;</span></button>
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

export default connect(mapStateToProps, { alert_clear })(Flash);