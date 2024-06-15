import Version from "../Version";
import v1_img from "../../../assets/Buissnes Cards v2 (85x55).png";
import v2_img from "../../../assets/Buissnes Cards v6 (85x55) 1.png";
import v3_img from "../../../assets/Buissnes Cards v5 (85x55) 1.png";
import styles from "./styles.module.scss"

function DetailsTop(){
    return (
        <div className={styles.details__top}>
            <Version img={v1_img} id={"V.1"} text={"Результат вашего обучения"}/>
            <Version img={v2_img} id={"V.2"} text={"Результат вашего обучения"}/>
            <Version img={v3_img} id={"V.3"} text={"Результат вашего обучения"}/>
        </div>
    );
}

export default DetailsTop;