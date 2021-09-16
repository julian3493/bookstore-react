import React, { useState } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';
import '../styles/BooksForm.css';

const BooksForm = ({ create }) => {
  const [newBook, setNewBook] = useState({
    id: Math.floor(Math.random() * 100),
    title: '',
    category: '',
  });

  const handleChange = (event) => {
    if (event.target.id === 'title') {
      setNewBook({ ...newBook, title: event.target.value });
    }
    if (event.target.id === 'categories') {
      setNewBook({ ...newBook, category: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    create(newBook);
    setNewBook({
      id: Math.floor(Math.random() * 100),
      title: '',
      category: '',
    });
  };

  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type="text" id="title" placeholder="Book Title" className="form-title" onChange={handleChange} />
        <select id="categories" className="form-categories" onChange={handleChange}>
          <option value="">Select category</option>
          {bookCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit" className="add-btn">ADD BOOK</button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  create: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  create: (book) => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
