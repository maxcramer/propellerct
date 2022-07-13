import React from "react";

import "./pagination.scss";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pag_container">
        {pageNumbers.map((number) => (
          <li key={number} className="pag_item">
            <a
              href="#"
              className={
                currentPage === number ? "pag_link currentPage" : "pag_link"
              }
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
