import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BookForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    onAdd({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleAddBook}>
      <h3>Add a Book</h3>
      <label htmlFor="title">
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="author">
        <input
          type="text"
          id="author"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
}

BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default BookForm;
