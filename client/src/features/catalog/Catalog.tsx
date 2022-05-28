import { Fragment, useEffect, useState } from 'react';
import { Product } from '../../app/models/product';
import { ProductList } from './ProductList';

export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:7218/api/products')
      .then(response => response.json())
      .then(items => setProducts(items));
  }, []);

  return (
    <Fragment>
      <ProductList products={products} />
    </Fragment>
  );
};
