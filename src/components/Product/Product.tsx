import { Button } from '@/ui/Button/Button';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './Product.module.scss';
import { Heading } from '@/ui/Heading/Heading';
import { Paragraph } from '@/ui/Paragraph/Paragraph';

export const Product = ({
    href,
    src,
    title,
    price,
}: {
    href: string;
    src: StaticImageData;
    title: string;
    price: number;
}) => {
    return (
        <article
            style={{ marginTop: '50px' }}
            className={styles.product}
        >
            <Link
                href={href}
                className={styles.content}
            >
                <div
                    className={styles['img-container']}
                >
                    <Image
                        fill
                        className={styles.img}
                        src={src}
                        alt={title}
                    />
                </div>

                <div className={styles.info}>
                    <Heading level={4}>{title}</Heading>
                    <Paragraph bold>{price} UAH</Paragraph>
                </div>
            </Link>
            <Button appearance="primary">Add to cart</Button>
        </article>
    );
};
