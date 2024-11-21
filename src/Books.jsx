import React, { Component } from 'react';

class Books extends Component {
  render() {

    const { books } = this.props;
    
    return (
      <div>
        <h2>Book List</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Books;
