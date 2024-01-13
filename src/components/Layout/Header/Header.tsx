import { Logo } from '@/ui/Logo/Logo';
import styles from './Header.module.scss';
import Link from 'next/link';

export const Header = () => {
    const links = [
        {
            href: '/',
            name: 'Home',
        },
        {
            href: '/shop',
            name: 'Shop',
        },
        {
            href: '/top-sellers',
            name: 'Top sellers',
        },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.column}>
                <Link href={'/'}>
                    <Logo />
                </Link>
                <nav className={styles.navigation}>
                    {links.map((link) => (
                        <a href={link.href}>{link.name}</a>
                    ))}
                </nav>
            </div>
        </header>
    );
};
