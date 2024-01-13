import styles from './Checkbox.module.scss';

export const Checkbox = ({ label, name }: { label: string; name: string }) => {
    return (
        <label
            className={styles.label}
            htmlFor={name}
        >
            <input
                className={styles.checkbox}
                id={name}
                type="checkbox"
            />
            {label}
        </label>
    );
};
