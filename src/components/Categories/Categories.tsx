import { Heading } from '@/ui/Heading/Heading';
import styles from './Categories.module.scss';
import Image from 'next/image';
import SVG from './123.svg';
import img from './a.png';
import Link from 'next/link';

export const Categories = () => {
    const categories = [
        {
            title: 'Jackets',
            href: '/#',
        },
        {
            title: 'Hoodies',
            href: '/#hoodies',
        },
        {
            title: 'Sweaters',
            href: '/#sweaters',
        },
        {
            title: 'Down jacket',
            href: '/#down-jacket',
        },
        {
            title: 'sweatshirt',
            href: '/#sweatshirt',
        },
        {
            title: 't-shirts',
            href: '/#t-shirts',
        },
        {
            title: 'Shirts',
            href: '/#shirts',
        },
        {
            title: 'Caps',
            href: '/#caps',
        },
        {
            title: 'Bags',
            href: '/#caps',
        },
        {
            title: 'pants',
            href: '/#pants',
        },
    ];

    return (
        <section>
            <Heading level={2}>Categories</Heading>
            <div className={styles.grid}>
                {categories.map(({ title, href }) => (
                    <div
                        key={href}
                        className={styles.category}
                    >
                        <Link href={href}>
                            <Image
                                fill
                                src={img}
                                alt="img"
                                className={styles.container}
                            />
                            <Heading
                                className={styles.heading}
                                level={3}
                            >
                                {title}
                            </Heading>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};
