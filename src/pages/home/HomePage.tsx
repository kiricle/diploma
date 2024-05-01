import Link from 'next/link';
import styles from './Home.module.scss';

export const HomePage = () => {
    return (
        <main className={styles.main}>
            Home
            <Link href={'/register'}>Register</Link>
        </main>
    );
};
