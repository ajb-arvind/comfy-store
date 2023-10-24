import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
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

  return (
    <div className=" mt16 flex justify-end">
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
        {pages.map((i) => {
          return (
            <button
              key={i}
              className={`join-item btn cursor-pointer ${
                page === i ? 'btn-active' : ''
              }`}
              onClick={() => {
                handlePageChange(i);
              }}
            >
              {i}
            </button>
          );
        })}

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
export default PaginationContainer;
