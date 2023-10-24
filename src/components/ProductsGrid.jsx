import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductsGrid = () => {
  const { products } = useLoaderData();
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((item) => {
        return <ProductCard key={item.id} id={item.id} {...item.attributes} />;
      })}
    </div>
  );
};
export default ProductsGrid;
