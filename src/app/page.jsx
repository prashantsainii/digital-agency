import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <h1 className={styles.title}>Better design for your digital products.</h1>
            <p className={styles.desc}>Turning your ideas into reality. We bring together global tech industry. </p>
            <Button url='/portfolio' text='See Our Works'/>
            {/* <button className={styles.button}>See Our Works</button> */}
        </div>

        <div className={styles.item}>
            <Image className={styles.img} src={Hero} alt=""/>
        </div>
    </div>
  )
}
