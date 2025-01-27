import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';
import styles from '../../styles/ShopPage.module.css';
import { getProductsByCategory } from '../api/products/[category]';

// CategoryPage component: Displays a list of products based on the selected category
const CategoryPage = ({ products }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Results for {router.query.category}</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

// getServerSideProps: Fetches data for the server-side rendering of the category page
export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}
