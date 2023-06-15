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
      <hr className="form-hr" />
      <BookList books={books} />
      <div className="addBook">
        <h2>ADD NEW BOOK</h2>
        <BookForm onSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default Books;
