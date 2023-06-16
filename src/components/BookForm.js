import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Styles/forms.css';

const BookForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || author.trim() === '') {
      return;
    }
    const itemId = Math.random().toString(36);
    const newBook = {
      item_id: itemId,
      title,
      author,
      category: 'fiction',
    };
    onSubmit(newBook);
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <hr className="form-hr" />
      <h2>ADD NEW BOOK</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-title"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="form-title"
        />
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
};
BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default BookForm;
