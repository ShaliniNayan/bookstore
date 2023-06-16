import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import BookForm from './BookForm';
import BookList from './BookList';
import '../Styles/forms.css';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleSubmit = (book) => {
    dispatch(addBook(book));
  };
  return (
    <>
      <div className="books">
        <BookList books={books} />
        <BookForm onSubmit={handleSubmit} />
      </div>
    </>
  );
};
export default Books;
