'use client';
import { Button } from '@/ui/Button/Button';
import { LogoutButton } from '@/ui/LogoutButton/LogoutButton';
import { usePathname } from 'next/navigation';
import styles from './ButtonContainer.module.scss';
import Link from 'next/link';

export const ButtonContainer = () => {
    const pathname = usePathname();
    const isPrivatePage = pathname?.match('/c');

    return isPrivatePage ? (
        <LogoutButton />
    ) : (
        <div className={styles.btn_container}>
            <Button appearance="primary">
                <Link href={'/login'}>Login</Link>
            </Button>
            <Button appearance="secondary">
                <Link href={'/register'}>Register</Link>
            </Button>
        </div>
    );
};
