import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList({ books, onDelete }) {
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
