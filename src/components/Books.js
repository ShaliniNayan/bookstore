import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import BookForm from './BookForm';
import BookList from './BookList';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleSubmit = (book) => {
    dispatch(addBook(book));
  };

  return (
    <div>
      <h2>Books</h2>
      <BookForm onSubmit={handleSubmit} />
      <BookList books={books} />
    </div>
  );
};

export default Books;
