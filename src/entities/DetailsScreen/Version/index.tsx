import styles from "./styles.module.scss"

interface Props{
    img: string;
    id: string;
    text: string;
}
function Version(props: Props) {
    return (
        <div className={styles.version}>
            <img className={styles.version__img} src={props.img} />
            <div className={styles.version__content}>
                <p className={styles.version__content__id}>{props.id}</p>
                <p className={styles.version__content__text}>{props.text}</p>
            </div>
        </div>
    );
}

export default Version;