import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Book from './Book';

function BookList({ books }) {
  const dispatch = useDispatch();

  const handleDelete = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} book={book} onDelete={() => handleDelete(book.item_id)} />
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};

export default BookList;
