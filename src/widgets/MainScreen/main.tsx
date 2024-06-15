import styles from "./styles.module.scss";
import main_image from '../../assets/main_img.png';
import CatalogButton from "../../features/CatalogButton/CatalogButton";
function MainScreen(){
    return (
        <div className={styles.main}>
            <div className={styles.main__content}>
                <h1 className={styles.main__heading}>
                    Простые вещи. <br /> Из бумаги
                </h1>
                <p className={styles.main__paragraph}>Бума́га (предположительно от итал. bombagia, <br />первоисточником же считается иранский) — <br />волокнистый материал с минеральными <br />добавками. </p>
                <CatalogButton />
            </div>
            <img src={main_image} alt="main-image" className={styles.main__img} />
        </div>
    );
}
export default MainScreen;