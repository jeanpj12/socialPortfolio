import styles from './styles.module.css'
import { FormNewPost } from '../../components/FormNewPost'
import { CardPost } from '../../components/CardPost'
import { PostsProps } from '../../types/Post'
import { useEffect, useState } from 'react'
import { getPosts } from '../../services/getPosts'

export function Feed() {
    const [posts, setPosts] = useState<PostsProps[]>([])
    
    useEffect(()=>{
        const postsData = getPosts()
        setPosts(postsData)
    }, [])

    const handleSendPost = (newPost: PostsProps) => {
        setPosts((prevPosts) => [...prevPosts, newPost])
    }

    return (
        <div className={styles.container}>
            <FormNewPost placeholder='Publique alguma dúvida ou depoimento...' onAddPost={handleSendPost} />
            <CardPost posts={posts} />
        </div>
    )
}