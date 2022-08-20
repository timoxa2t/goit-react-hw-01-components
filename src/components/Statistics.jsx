import styles from "../css/Statistics.module.css"

export default function Statistics({title, stats}){

    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>

            <ul className={styles.stat_list}>
                {stats.map(item => 
                    <li className={styles.item} key={item.id}>
                        <span className={styles.label}>{item.label}</span>
                        <span className={styles.percentage}>{item.percentage}%</span>
                    </li>
                )}
            </ul>
        </section>
    )
}