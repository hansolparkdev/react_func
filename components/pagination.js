/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

const Pagination = (props) => {
  // console.log(props);
  const [pages, setPages] = useState([]);
  const {
    itemsCount, pageSize,
    currentPage, onPageChange,
  } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  useEffect(() => {
    for (let i = 1; i <= pageCount; i += 1) {
      setPages((prevArray) => [...prevArray, i]);
    }
  }, []);

  return (
    <ul>
      {pages.map((v, i) => (
        <li
          key={i}
          className={v === currentPage ? 'page-item active' : 'page-item'}
          style={{ cursor: 'pointer' }}
        >
          <a href="#" className="page-link" onClick={() => onPageChange(v)}>{v}</a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
