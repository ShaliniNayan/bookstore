import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './redux/books/booksSlice.js';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
