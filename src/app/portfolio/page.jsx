import Link from 'next/link'
import styles from './page.module.css'

export default function Portfolio() {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}> Choose a gallary </h1>
            <div className={styles.items}>
                <Link className={styles.item} href='/portfolio/illustrations'>
                    <span className={styles.title}> Illustrations </span>
                </Link>

                <Link className={styles.item} href='/portfolio/websites'>
                    <span className={styles.title}> Websites </span>
                </Link>

                <Link className={styles.item} href='/portfolio/applications'>
                    <span className={styles.title}> Applications </span>
                </Link>
            </div>
        </div>
    )
}