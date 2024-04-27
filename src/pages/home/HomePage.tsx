import { MyLink } from '@/ui/Link/Link';
import styles from './Home.module.scss';

export const HomePage = () => {
    return (
        <main className={styles.main}>
            <MyLink href="/">Some</MyLink>
        </main>
    );
};
