import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../actions/index';

import Book from '../components/Book';

const BooksList = ({ books, remove }) => {
  const handleRemoveBook = (book) => {
    remove(book);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            BookID
          </th>
          <th>
            Title
          </th>
          <th>
            Category
          </th>
        </tr>
      </thead>
      <tbody>
        { books.map((book) => <Book key={book} book={book} remove={handleRemoveBook} />)}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (book) => dispatch(removeBook(book)),
});

export default connect(mapStateProps, mapDispatchToProps)(BooksList);
