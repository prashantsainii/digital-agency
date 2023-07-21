'use client'
import { useSession } from 'next-auth/react'
import styles from './page.module.css'
import useSWR from 'swr'
export default function Dashboard() {

    const session = useSession();

    console.log(session);


    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
    
    return (
        <div className={styles.container}>Dashboard</div>
    )
}
