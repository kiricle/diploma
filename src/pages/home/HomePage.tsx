import { Categories } from '@/components/Categories/Categories';
import styles from './Home.module.scss';
import { Product } from '@/components/Product/Product';
import Img from './a.png';

export const HomePage = () => {
    return (
        <main className={styles.main}>
            <Categories />
            <Product
                href="#"
                price={5000}
                src={Img}
                title="Some title"
            />
        </main>
    );
};
