import { useState, useEffect } from "react";

const Pagination = ({ total, limit, onPageChange, page }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    if (page && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, [page, totalPages]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const skip = (newPage - 1) * limit;
      onPageChange(skip);
    }
  };

  // Menentukan startPage dan endPage dengan batasan yang tepat
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  const pageRange = [];
  for (let i = startPage; i <= endPage; i++) {
    pageRange.push(i);
  }

  return (
    <div className="flex items-center mt-4 gap-3 justify-center text-sm">
      {currentPage > 1 && (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      )}

      {pageRange.map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`${
            number === currentPage ? "bg-sky-700 text-white" : ""
          } w-8 h-8 flex items-center justify-center rounded`}
        >
          {number}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
