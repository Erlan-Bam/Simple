import BuyButton from "@features/BuyButton";
import styles from "./styles.module.scss";
import src from "@assets/pic.png";

function FillerScreen(){
    return (
        <div className={styles.filler}>
            <div className={styles.filler__content}>
                <h3 className={styles.filler__content__heading}>
                    Simple скетчбук
                </h3>
                <p className={styles.filler__content__paragraph}>
                    80 листов, твердая обложка, бумага<br /> Fabriano 200 г/м2. Подойдет и для графики и для<br /> акварели. Для самых<br /> смелых творческих замыслов!
                </p>
                <BuyButton />
            </div>
            <img className={styles.filler__img} src={src} alt="book" />
        </div>
    );
}
export default FillerScreen;