import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <div>
    <h4>{book.title}</h4>
    <p>
      Author:
      {book.author}
    </p>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
