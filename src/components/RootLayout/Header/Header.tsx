import { MyLink } from '@/ui/Link/Link';
import { ButtonContainer } from './ButtonContainer/ButtonContainer';
import styles from './Header.module.scss';

export const Header = () => {


    return (
        <header className={styles.header}>
            <MyLink href='/c/' ><h1>Task Manager</h1></MyLink>
            <ButtonContainer />
        </header>
    );
};
