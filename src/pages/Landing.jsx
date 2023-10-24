import { QueryClient } from '@tanstack/react-query';
import FeaturedProducts from '../components/FeaturedProducts';
import Hero from '../components/Hero';
import { customFetch } from '../utils';

const url = '/products?featured=true';

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const resp = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = resp.data.data;
  return { products };
};

const Landing = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};
export default Landing;
