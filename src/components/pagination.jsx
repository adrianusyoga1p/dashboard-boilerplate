import { useState } from 'react';

const Pagination = ({ total, limit, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const skip = (page - 1) * limit;
    onPageChange(skip);
  };

  return (
    <div className='flex items-center'>
      <button 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Previous
      </button>
      
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`${currentPage === index + 1 ? 'bg-sky-500 text-white' : ''} w-10 h-10 flex items-center justify-center`}
        >
          {index + 1}
        </button>
      ))}

      <button 
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
