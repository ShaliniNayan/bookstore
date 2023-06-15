import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book, itemId }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h4>{book.title}</h4>
      <p>
        Author:
        {book.author}
      </p>
      <button type="button" onClick={() => dispatch(removeBook(itemId))}>
        Remove
      </button>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    itemId: PropTypes.string.isRequired,
  }).isRequired,
  itemId: PropTypes.string.isRequired,
};
export default Book;
