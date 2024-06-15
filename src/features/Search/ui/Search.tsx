import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles.module.scss";
function Search() {
    return (
        <div className={styles.searchBar}>
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            <input type="text" placeholder="Search..." className={styles.searchInput} />
        </div>
    )
}

export default Search;