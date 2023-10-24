import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const ComplexPaginationContainer = () => {
  const { meta, params } = useLoaderData();

  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();

  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`btn btn-xs sm:btn-md border-none join-item ${
          activeClass ? 'bg-base-300 border-base-300 ' : ''
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    // first button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    // dots
    if (page > 2) {
      pageButtons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-1">
          ...
        </button>
      );
    }

    // active/current page
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }

    // dots
    if (page < pageCount - 1) {
      pageButtons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-2">
          ...
        </button>
      );
    }
    if (pageCount > 2) {
      // last button
      pageButtons.push(
        addPageButton({
          pageNumber: pageCount,
          activeClass: page === pageCount,
        })
      );
    }
    return pageButtons;
  };

  return (
    <div className=" mt-16 flex justify-end">
      <div className="join">
        <button
          className="join-item btn "
          onClick={() => {
            let nextPage = page - 1;
            if (nextPage < 1) nextPage = pageCount;
            handlePageChange(nextPage);
          }}
        >
          PREV
        </button>
        {renderPageButtons()}
        <button
          className="join-item btn "
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default ComplexPaginationContainer;
