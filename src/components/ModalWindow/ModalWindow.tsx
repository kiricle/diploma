import { Button } from '@/ui/Button/Button';
import { Heading } from '@/ui/Heading/Heading';
import { ReactNode } from 'react';
import { Portal } from '../Portal/Portal';
import styles from './ModalWindow.module.scss';

export const ModalWindow = ({
    visible,
    onClose,
    onSubmit,
    children,
    title,
    contentClassName,
    footer,
}: {
    visible: boolean;
    onClose: () => void;
    onSubmit: () => void;
    children: ReactNode;
    footer?: ReactNode;
    title: string;
    contentClassName?: string;
}) => {
    if (!visible) return null;

    return (
        <Portal target="body">
            <div
                className={styles.overlay}
                onClick={onClose}
            >
                <div
                    className={styles.modal}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.row}>
                        <Heading level={2}>{title}</Heading>
                        <button
                            onClick={onClose}
                            className={styles.close}
                        >
                            X
                        </button>
                    </div>
                    <div
                        className={[styles.content, contentClassName].join(' ')}
                    >
                        {children}
                    </div>
                    <div className={styles.buttons}>
                        <Button
                            onClick={onClose}
                            appearance="secondary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                onSubmit();
                            }}
                            appearance="primary"
                        >
                            Save
                        </Button>
                    </div>

                    {footer}
                </div>
            </div>
        </Portal>
    );
};
