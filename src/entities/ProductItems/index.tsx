import styles from './styles.module.scss'
import MoreButton from '@features/MoreButton/index'
interface Props {
    img: string;
    quantity: number;
    text: string;
}
function ProductItems({ img, quantity, text } : Props) {
    return (
        <div className={styles.item}>
            <img src={ img } className={styles.item__img}></img>
            <p className={styles.item__quantity}>{ `Тираж: от ${quantity} штук` }</p>
            <p className={styles.item__text}>{ text }</p>
            <MoreButton />
        </div>
    );
}

export default ProductItems;