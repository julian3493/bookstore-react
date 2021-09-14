import React, { useState } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

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
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="title">
          Book title
          <input type="text" id="title" onChange={handleChange} />
        </label>
        <label htmlFor="categories">
          Select the Category
          <select id="categories" onChange={handleChange}>
            {bookCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add the book</button>
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
