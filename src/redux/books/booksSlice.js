import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}cB7E2CfunO2lnuoy6kUA/books`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addBook = createAsyncThunk(
  'postBooks/postBook',
  async (book, thunkAPI) => {
    try {
      const resp = await axios(`${API_BASE_URL}cB7E2CfunO2lnuoy6kUA/books`, {
        method: 'POST',
        data: JSON.stringify(book),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (resp.status === 201) {
        return null;
      }
      return null;
    } catch (err) {
      return thunkAPI.rejectWithValue('Failed to post book');
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (itemId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}cB7E2CfunO2lnuoy6kUA/books/${itemId}`);
      return itemId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.filter((book) => book.item_id !== action.payload);
      });
  },
});

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
