import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, filterBook } from '../actions/index';

import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, filter, remove, filterSelection,
}) => {
  const handleRemoveBook = (book) => {
    remove(book);
  };

  const handleFilterChange = (e) => {
    filterSelection(e.target.value);
  };

  const booksFilter = () => {
    let list;
    if (filter === 'All') {
      list = books;
    } else {
      list = books.filter((book) => book.category === filter);
    }
    return list;
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
        { booksFilter().map((book) => <Book key={book} book={book} remove={handleRemoveBook} />)}
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
  filterSelection: PropTypes.func.isRequired,
};

const mapStateProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (book) => dispatch(removeBook(book)),
  filterSelection: (category) => dispatch(filterBook(category)),
});

export default connect(mapStateProps, mapDispatchToProps)(BooksList);
