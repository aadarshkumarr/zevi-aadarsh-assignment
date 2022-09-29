import React from 'react';
import useCommonStore from '../store';
import ProductCard from './ProductCard';
import { FiShoppingBag } from 'react-icons/fi';
const Products = () => {
  const products = useCommonStore((state) => state.products);
  let filteredProducts = useCommonStore((state) => state.filteredProducts);

  const NoProducts = (
    <div className="flex items-center flex-col justify-center h-full space-y-5">
      <FiShoppingBag size={30} color="blue" />
      <h3 className="text-xl font-semibold">
        No Results found ,Please try using different filters
      </h3>
    </div>
  );

  if (!filteredProducts) {
    return NoProducts;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4   gap-8">
      {(filteredProducts.length === 0 ? products : filteredProducts).map((prod) => (
        <ProductCard key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default Products;
