import React from 'react';

const Pagination = ({ currentPage, perPage, total, paginate }) => {
  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++)
  {
    pageNumbers.push(i);
  }

  const renderListItem = number => {
    return (
      <li onClick={() => paginate(number)} key={number} className={`page-item${currentPage === number ? ' active' : ``}`}>
        <span className="page-link">
          {number}
        </span>
      </li>
    )
  }

  return (
    <ul className="pagination">
      {pageNumbers.map(number => renderListItem(number) )}
    </ul>

  )
}

export default Pagination;