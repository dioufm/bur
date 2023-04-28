import Layout from '../components/Layout';
import Product from '../components/Product';

import data from '../utils/data';

export default function Home() {
  return (
    <Layout title="buur home page">
      <h2 className="h2 my-4">Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <Product product={product} key={product.slug}></Product>
        ))}
      </div>
    </Layout>
  );
}
