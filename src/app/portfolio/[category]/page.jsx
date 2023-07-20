import Button from '@/components/Button/Button';
import styles from './page.module.css'
import Image from 'next/image';
import { items } from './data'
import { notFound } from 'next/navigation';

const getData = (cat) => {
    const data = items[cat];
    if(data){
        return data;
    }
    return notFound();
}


export default function Category({params}) {
    const data = getData(params.category);
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>

            {
                data.map((item) => (
                    <div className={styles.item} key={item.id}>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.desc}>{item.desc}</p>
                            <Button text='See More' url='#'/>
                        </div>
                        <div className={styles.imgContainer}>
                            <Image
                                className={styles.img}
                                fill={true}
                                src={item.image}
                                alt=""
                            />
                        </div>
                    </div>
                ))
            }
            



            {/* <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                    <Button text='See More' url='#'/>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        fill={true}
                        src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
                        alt=""
                    />
                </div>
            </div> */}
        </div>
    )
}