import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books }) => {
  const renderBooks = books.map((book) => {
    if (book && book.item_id) {
      return <Book key={book.item_id} book={book} />;
    }
    return null;
  });
  return (
    <div>
      <h3>Book List</h3>
      {renderBooks}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
