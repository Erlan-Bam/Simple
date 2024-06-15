import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles.module.scss";

function Logout() {
    const handleClick = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
        console.log("Clicked");
    }
    return (
        <button className={styles.logoutButton} onClick={handleClick}>
          <FontAwesomeIcon icon={faSignOutAlt} className={styles.logout__icon}/>
          Logout
        </button>
    )
}

export default Logout;