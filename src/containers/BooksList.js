import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, filterBook } from '../actions/index';

import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, filter, remove }) => {
  const handleRemoveBook = (book) => {
    remove(book);
  };

  const handleFilterChange = (e) => {
    filter(e.target.value);
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
          <th>
            <CategoryFilter handleFilter={handleFilterChange} />
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
  filter: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (book) => dispatch(removeBook(book)),
  filter: (category) => dispatch(filterBook(category)),
});

export default connect(mapStateProps, mapDispatchToProps)(BooksList);
