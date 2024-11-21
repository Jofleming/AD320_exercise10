import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import AddBook from './AddBook';
import About from './About';
import '../public/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  addBook = (book) => {
    this.setState((prevState) => ({
      books: [...prevState.books, book],
    }));
  };

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/add-book">Add Book</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books books={this.state.books} />} />
            <Route path="/add-book" element={<AddBook addBook={this.addBook} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
