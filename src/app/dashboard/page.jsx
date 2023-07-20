'use client'
import styles from './page.module.css'
import useSWR from 'swr'
export default function Dashboard() {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
    console.log(data)
    return (
        <div>Dashboard</div>
    )
}
