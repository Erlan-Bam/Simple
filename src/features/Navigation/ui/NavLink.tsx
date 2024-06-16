import { FC } from 'react';
import styles from "../styles.module.scss";
import { Link } from "react-scroll";

interface Props {
    to: string;
    text: string;
}

const NavLink: FC<Props> = ({ to, text }) => {
    return (
        <div className={styles.nav__link__container}>
            <Link smooth to={to} className={styles.nav__link}>
                {text}
            </Link>
        </div>
    );
}

export default NavLink;
