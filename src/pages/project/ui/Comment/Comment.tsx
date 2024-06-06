import { Heading } from '@/ui/Heading/Heading';
import styles from './Comment.module.scss';

export const Comment = ({ author, content, createdAt }: TaskComment) => {
    return (
        <div className={styles.comment}>
            <div className={styles.info}>
                <div className={styles.avatar}>
                    {author.email.slice(0, 1).toUpperCase()}
                </div>
                <Heading level={5}>{author.email}</Heading>
                <span>
                    {new Date(createdAt).toLocaleDateString('en-EN', {
                        day: '2-digit',
                        month: 'numeric',
                        year: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </span>
            </div>
            <div className={styles.content}>{content}</div>
        </div>
    );
};
