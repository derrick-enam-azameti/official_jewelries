import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="https://imgur.com/rX6g0yJ.jpg" name="RINGS" />
        <CategoryCard image="https://imgur.com/SMqvLOM.png" name="NECKLACES" />
        <CategoryCard image="https://imgur.com/IQgwfxS.jpg" name="EARRINGS" />
      </div>
      <div className={styles.large}>
        <CategoryCard image="https://imgur.com/n6E3tz6.jpg" name="WATCHES" />
        <CategoryCard image="https://imgur.com/ujySRXV.jpg" name="GEMSTONES" />
      </div>
    </main>
  );
};

export default HomePage;

