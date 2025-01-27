import ProductCard from '../components/ProductCard';
import styles from '../styles/ShopPage.module.css';
import { getProducts } from './api/products/index';

// ShopPage component: Displays all available products
const ShopPage = ({ products }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

// getStaticProps: Fetches data at build time for static generation
export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
