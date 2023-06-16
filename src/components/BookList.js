import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books }) => {
  const bookStyle = {
    maxHeight: '400px',
    overflow: 'auto',
  };
  const renderBooks = Object.entries(books).map(([id, book]) => book.map((bookItem) => {
    if (bookItem && id) {
      return <Book key={id} book={bookItem} itemId={id} />;
    }
    return null;
  }));
  return (
    <ul style={bookStyle}>
      {renderBooks}
    </ul>
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
