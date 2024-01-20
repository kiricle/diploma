import Link from 'next/link';
import styles from './SocialLink.module.scss';

type SocialLink = 'instagram' | 'telegram';

interface LinkInfo {
    href: string;
    title: string;
    className: string;
}

export const SocialLink = ({ link }: { link: SocialLink }) => {
    const links: Record<SocialLink, LinkInfo> = {
        instagram: {
            className: styles.instagram,
            href: '#',
            title: 'Instagram',
        },
        telegram: {
            className: styles.telegram,
            href: '#',
            title: 'Telegram',
        },
    };

    const { className, href, title } = links[link];

    return (
        <Link
            href={href}
            className={styles.link + ' ' + className}
        >
            {title}
        </Link>
    );
};
