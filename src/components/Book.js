import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, onDelete }) {
  const handleDelete = () => {
    onDelete(book.item_id);
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>
        Author:
        {book.author}
      </p>
      <p>
        Category:
        {book.category}
      </p>
      <button type="button" onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
