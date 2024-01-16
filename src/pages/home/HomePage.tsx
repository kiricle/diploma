import { Categories } from '@/components/Categories/Categories';
import styles from './Home.module.scss';

export const HomePage = () => {
    return (
        <main className={styles.main}>
            <Categories />
        </main>
    );
};
