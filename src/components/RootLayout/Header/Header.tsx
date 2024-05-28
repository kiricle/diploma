import { ButtonContainer } from './ButtonContainer/ButtonContainer';
import styles from './Header.module.scss';

export const Header = () => {


    return (
        <header className={styles.header}>
            <h1>Task Manager</h1>
            <ButtonContainer />
        </header>
    );
};
