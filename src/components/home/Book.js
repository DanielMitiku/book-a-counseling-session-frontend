import React from 'react';


class Book extends React.Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div className='main-bar bar'>
        <p>{id} </p>
      </div>
    );
  }
}

export default Book;