import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import '../Styles/BookStyle.css';

const Book = ({ book, itemId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li className="mainContent">
        <div className="displayBooks">
          <div className="book-details">
            <span className="category">{book.category}</span>
            <h4 className="book-title">{book.title}</h4>
            <p className="author">{book.author}</p>
            <div className="btn-container">
              <button type="button">Comment</button>
              <button type="button" onClick={() => dispatch(removeBook(itemId))}>
                Remove
              </button>
              <button type="button">Edit</button>
            </div>
          </div>
          <div className="progress-percent">
            <div className="rotate">
              <span className="circle"> </span>
            </div>
            <div className="test">
              <p className="percent">65%</p>
              <p className="completed">Completed</p>
            </div>
          </div>
          <div className="line" />
          <div className="current-chapter-container">
            <p className="current-chapter">Current Chapter</p>
            <p className="chapter">Chapter 20</p>
            <button type="button" className="progress">
              Update Progress
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
Book.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    itemId: PropTypes.string.isRequired,
  }).isRequired,
  itemId: PropTypes.string.isRequired,
};
export default Book;
