import React, { useState } from 'react';
import Book from './Book';
import BookForm from './BookForm';

function Books() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={handleDeleteBook} />
      ))}
      <BookForm onSubmit={handleAddBook} />
    </div>
  );
}

export default Books;
