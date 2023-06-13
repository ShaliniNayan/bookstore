import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import BookList from './BookList';
import BookForm from './BookForm';

function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <BookList books={books} />
      <BookForm onSubmit={handleAddBook} />
    </div>
  );
}

export default Books;
