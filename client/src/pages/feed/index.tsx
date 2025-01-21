import styles from './styles.module.css'
import { FormNewPost } from '../../components/FormNewPost'
import { CardPost } from '../../components/CardPost'
import { PostsProps } from '../../types/Post'
import { useEffect, useState } from 'react'
import { getPosts } from '../../services/getPosts'
import { API } from '../../services/APIService'

export function Feed() {
    const [posts, setPosts] = useState<PostsProps[]>([])

    const getPosts = async () => {
        try {
            const postData = await API.get(
                '/post',
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            setPosts(postData.data)
        } catch (err) {
            console.error('Erro ao buscar posts', err)
        }
    }


    useEffect(() => {
        getPosts()
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