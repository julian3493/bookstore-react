import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook, removeBook } from '../actions/index';

import Book from './Book';

const BooksList = ({ books }) => (
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
      {books.map((book) => <Book key={book} book={book} />)}
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  create: (book) => dispatch(createBook(book)),
  delete: (book) => dispatch(removeBook(book)),
});

export default connect(mapStateProps, mapDispatchToProps)(BooksList);
