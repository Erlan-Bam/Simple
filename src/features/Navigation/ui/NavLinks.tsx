import NavLink from "./NavLink";
import styles from "../styles.module.scss";
import Search from "../../Search/ui/Search";
import Logout from "../../Logout";

import { navLinks } from "../../../shared/lib/content/navLinksContent";

function NavLinks() {
    return (
        <nav className={styles.nav_links}>
            {navLinks.map((link, index) =>
                <NavLink to={link.to} text={link.text} key={index} />
            )}
            <Search />
            <Logout />
        </nav>
    );
}

export default NavLinks;
