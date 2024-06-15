import { items } from "@shared/lib/content/productItemContent";
import ProductItems from "@entities/ProductItems/index";
import styles from "./styles.module.scss";

function ProductsScreen(){
    return (
        <div className={styles.products}>
            <div className={styles.products__container}>
                {items.map(item => 
                (
                    <ProductItems img={item.img} quantity={item.quantity} text={item.text}/>
                )
                )}
            </div>
        </div>
    );
}

export default ProductsScreen;