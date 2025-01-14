import styles from './styles.module.css'
import { CardPost } from '../../components/CardPost'
import { getPosts } from '../../services/getPosts'
import { useEffect, useState } from 'react'
import { PostsProps } from '../../types/Post'

export function Portfolio() {

    const [posts, setPosts] = useState<PostsProps[]>([])
    
    useEffect(()=>{
        const postsData = getPosts().filter((post) => post.portfolio == false)
        setPosts(postsData)
    }, [])


    return (
        <div className={styles.container}>
            <CardPost posts={posts} />
        </div>
    )
}