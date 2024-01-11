import Image from 'next/image';
import styles from './page.module.scss';
import { Button } from '@/app/ui/Button/Button';
import { Heading } from '@/app/ui/Heading/Heading';
import { Input } from '@/app/ui/Input/Input';

export default function Home() {
    return (
        <main className={styles.main}>
            <Button appearance="primary">Button</Button>
            <Button appearance="secondary">Button</Button>
            <Button appearance="danger">Button</Button>
            <Input
                type="text"
                content="Label"
                placeholder="Input something"
            />
            <Heading level={1}>Heading</Heading>
            <Heading level={2}>Heading</Heading>
            <Heading level={3}>Heading</Heading>
            <Heading level={4}>Heading</Heading>
            <Heading level={5}>Heading</Heading>
        </main>
    );
}
