import React from 'react';

const BooksForm = () => {
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
