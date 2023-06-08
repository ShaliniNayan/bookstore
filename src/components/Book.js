import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, onDelete }) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>
        Author:
        {book.author}
      </p>
      <button type="button" onClick={() => onDelete(book.id)}>
        Delete
      </button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
