import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/booksSlice';

const Book = ({ id, title, author, category }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <div>
        <p>
          <span>Book title :</span>
          {title}
        </p>
      </div>
      <div>
        <p>
          <span>Author :</span>
          {author}
        </p>
      </div>
      <div>
        <p>
          <span>Category :</span>
          {category}
        </p>
      </div>
      <button type="button" onClick={handleRemoveClick}>
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
