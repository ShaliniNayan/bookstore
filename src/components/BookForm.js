import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BookForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, price });
    setTitle('');
    setAuthor('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Book</h3>
      <label htmlFor="title">
        Title:
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label htmlFor="author">
        Author:
        <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label htmlFor="price">
        Price:
        <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BookForm;
