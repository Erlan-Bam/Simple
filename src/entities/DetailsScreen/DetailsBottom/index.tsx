import styles from "./styles.module.scss";
import img from "../../../assets/Folder v8 Open 1.png";
function DetailsBottom(){
    return (
        <div className={styles.details__bottom}>
            <img src={img} alt="img" />
            <div className={styles.details__bottom__content}>
                <h3 className={styles.details__bottom__heading}>
                    Максимальная белизна
                </h3>
                <p className={styles.details__bottom__paragraph}>
                    Для повышения белизны, гладкости и мягкости в состав бумажной массы вводят белые минеральные вещества: мел, тальк, каолин и др. Эта операция называется наполнением.
                    Отлив бумажного листа осуществляют на бумагоделательной машине, важнейшей частью которой является непрерывно движущаяся (как транспортер) металлическая или капроновая сетка.
                </p>
            </div>
        </div>
    )
}
export default DetailsBottom;