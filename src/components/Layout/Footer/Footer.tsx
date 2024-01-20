import { Heading } from '@/ui/Heading/Heading';
import styles from './Footer.module.scss';
import { Paragraph } from '@/ui/Paragraph/Paragraph';
import Link from 'next/link';
import { SocialLink } from '@/ui/SocialLink/SocialLink';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <Heading level={4}>About us</Heading>
                    <Paragraph>
                        Some Name is your partner in the world of stylish and
                        high-quality clothing. Our products combine unique
                        design with high quality materials. With Some Name you
                        will always look stylish and confident
                    </Paragraph>
                </div>
                <nav className={styles.navigation}>
                    <Heading level={4}>Information</Heading>
                    <Link
                        className={styles.navigation_link}
                        href="#"
                    >
                        Home
                    </Link>
                    <Link
                        className={styles.navigation_link}
                        href="#"
                    >
                        Shipping
                    </Link>
                    <Link
                        className={styles.navigation_link}
                        href="#"
                    >
                        Refund
                    </Link>
                    <Link
                        className={styles.navigation_link}
                        href="#"
                    >
                        Q&A
                    </Link>
                </nav>
                <nav className={styles.navigation}>
                    <Heading level={4}>Support</Heading>
                    <Link
                        className={styles.navigation_link}
                        href="#"
                    >
                        Connection with us
                    </Link>
                </nav>
                <nav className={styles.navigation}>
                    <Heading level={4}>Contact us</Heading>
                    <Link
                        className={styles.navigation_link}
                        href="#"
                    >
                        +38(96)-222-2222
                    </Link>
                    <Link
                        className={styles.navigation_link}
                        href="#"
                    >
                        kolotylo.k.m@gmail.com
                    </Link>
                    <SocialLink link="instagram" />
                    <SocialLink link="telegram" />
                </nav>
            </div>
        </footer>
    );
};
