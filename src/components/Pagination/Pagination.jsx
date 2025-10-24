import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  totalPages,
  currentPage,
  handleNextPage,
  handlePreviousePage,
  handleClickPageNumber,
}) => {
  return (
    <div className={styles["pagination"]}>
      <div className={styles["list"]}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              disabled={currentPage === index + 1}
              key={index}
              className={styles["page-number"]}
              onClick={() => handleClickPageNumber(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className={styles["arrows"]}>
        <button
          disabled={currentPage <= 1}
          className={styles["arrow"]}
          onClick={handlePreviousePage}
        >
          Назад
        </button>
        <button
          disabled={currentPage >= totalPages}
          className={styles["arrow"]}
          onClick={handleNextPage}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

export default Pagination;
