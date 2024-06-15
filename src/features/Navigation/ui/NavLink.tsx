import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles.module.scss";

interface Props {
    to: string;
    text: string;
}

const NavLink: FC<Props> = ({ to, text }) => {
    return (
        <div className={styles.nav__link__container}>
            <Link to={to} className={styles.nav__link}>
                {text}
            </Link>
        </div>
    );
}

export default NavLink;
