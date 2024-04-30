import { MyLink } from '@/ui/Link/Link';
import styles from './Home.module.scss';
import { Input } from '@/ui/Input/Input';
import { Button } from '@/ui/Button/Button';

export const HomePage = () => {
    return (
        <main className={styles.main}>
            <Input
                content="Email"
                type="email"
            />
            <Input
                content="Password"
                type="password"
            />
            <Button appearance="primary">Register</Button>
        </main>
    );
};
