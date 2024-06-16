import DetailsBottom from "@entities/DetailsScreen/DetailsBottom";
import DetailsTop from "@entities/DetailsScreen/DetailsTop";
import styles from "./styles.module.scss"
function DetailsScreen(){
    return (
        <div className={styles.details} id="details">
            <DetailsTop/>
            <DetailsBottom/>
        </div>
    )
}
export default DetailsScreen;