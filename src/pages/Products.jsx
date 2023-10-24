import { customFetch } from '../utils';
import { Filters, ProductsContainer, PaginationContainer } from '../components';
import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const url = '/products';

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const resp = await queryClient.ensureQueryData(allProductsQuery(params));
    const products = resp.data.data;
    const meta = resp.data.meta;

    return { products, meta, params };
  };

const Products = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterShow = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <div className="flex justify-end">
        <button
          className="btn btn-accent btn-sm sm:mb-10"
          onClick={handleFilterShow}
        >
          Filter {<FaFilter />}
        </button>
      </div>
      {showFilter ? <Filters /> : ''}
      <ProductsContainer/>
      <PaginationContainer />
    </>
  );
};
export default Products;
