import React from 'react';

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  pageSize,
  onPageSizeChange,
  pageSizes = [10, 20, 50, 100],
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) { 
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageSizeChange = (event) => {
    onPageSizeChange(parseInt(event.target.value, 10));
  };

  const renderPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`px-2 py-1 rounded ${
            1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          1
        </button>
      );

      if (startPage > 2) {
        pages.push(<span key="start-ellipsis">. . .</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-2 py-1 rounded ${
            i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<span key="end-ellipsis">. . .</span>);
      } 

      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`px-2 py-1 rounded ${
            totalPages === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between gap-3 w-full">
      <div className="flex items-center space-x-2">
        <span className='text-sm'>Rows per page:</span>
        <select
          value={pageSize}
          onChange={handlePageSizeChange}
          className="px-2 py-1 bg-gray-200 rounded text-sm"
        >
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50 text-xs"
        >
          Previous
        </button> 
        <div className="flex space-x-1 mx-2 text-xs">{renderPageNumbers()}</div>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50 text-xs"
        >
          Next
        </button>
      </div>
    </div>
  );
};