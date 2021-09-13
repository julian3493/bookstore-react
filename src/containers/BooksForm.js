import React from 'react';
import { useState } from 'react';
import { createBook } from '../actions';

const BooksForm = () => {
  const [newBook, setNewBook] = useState({
    id: Math.floor(Math.random() * 100),
    title: '',
    category: '',
  })

  const handleChange = (event) => {
    if (event.target.id === 'title') {
      setNewBook({...newBook, title: event.target.value})
    }
    if (event.target.id === 'categories') {
      setNewBook({...newBook, category: event.target.value})
    }
  }

  const handleSubmit = () => {
    createBook(newBook);
    setNewBook({
      id: Math.floor(Math.random() * 100),
      title: '',
      category: '',})
  }
  
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div>
      <form>
        <label htmlFor="title">
          Book title
          <input type="text" id="title" />
        </label>
        <label htmlFor="categories">
          Select the Category
          <select id="categories">
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

export default BooksForm;
