import React, { Component } from 'react';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: this.state.title,
      author: this.state.author,
    };

    this.props.addBook(newBook);

    this.setState({
      title: '',
      author: '',
    });
  };

  render() {
    return (
      <div>
        <h2>Add a New Book</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Author: </label>
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
