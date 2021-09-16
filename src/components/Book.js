import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({ book, remove }) => (
  <div className="book-row">
    <div className="left-container">
      <div className="book-info">
        <p className="book-category">{book.category}</p>
        <p className="book-title">{book.title}</p>
        <p className="book-author">Author</p>
      </div>
      <div className="options">
        <button type="button">Comments</button>
        <button type="button" onClick={() => remove(book)}>Remove</button>
        <button type="button" className="last-btn">Edit</button>
      </div>
    </div>
    <div className="graph">
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full"><p> </p></div>
          <div className="mask half"><p> </p></div>
          <div className="inside-circle">
            <p> </p>
          </div>
        </div>
      </div>
      <div>
        <p>0%</p>
        <span>Completed</span>
      </div>
    </div>
    <div className="chapter-container">
      <p className="current">CURRENT CHAPTER</p>
      <p className="chapter">Chapter 1</p>
      <button type="button" className="update-btn">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;
