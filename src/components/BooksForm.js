import React from 'react';

const BooksForm = () => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div>
      <form>
        <label for="title">
          Book title
        </label>
        <input type="text" id="title"/>
        <label for="caregories">
          Select the Category
        </label>
        <select id="categories">
          {bookCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit">Add the book</button>
      </form>
    </div>
  );
};

export default BooksForm;