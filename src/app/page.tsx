import Image from 'next/image';
import styles from './page.module.scss';
import { Button } from '@/app/ui/Button/Button';

export default function Home() {
    return (
        <main className={styles.main}>
            <Button appearance="primary">Button</Button>
            <Button appearance="secondary">Button</Button>
            <Button appearance="danger">Button</Button>
        </main>
    );
}
