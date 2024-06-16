import { list } from "@shared/lib/content/sponsorListContent";
import styles from "./styles.module.scss";
// import { useEffect } from "react";
function SponsorsScreen(){
    const duplicatedList = [...list, ...list];
    return (
        <div className={styles.sponsors} id="sponsors">
            <div className={styles.sponsors__container}>
                {
                    duplicatedList.map((item, index) => {
                        return <img className={styles.sponsors__container__img} src={item.img} alt={`sponsor image ${index}`} key={index}/>
                    })
                }
            </div>
        </div>
    );
}
export default SponsorsScreen;