import styles from './styles.module.css'
import { FormNewPost, newPost } from '../../components/FormNewPost'
import { CardPost } from '../../components/CardPost'
import { PostsProps } from '../../types/Post'
import { useEffect, useState } from 'react'
import { API } from '../../services/APIService'
import { Loading } from '../../components/Loading'

export function Feed() {

    const [posts, setPosts] = useState<PostsProps[]>([])
    const [loading, setLoading] = useState(false)

    const getPosts = async () => {
        setLoading(true)
        try {
            const postData = await API.get(
                '/post',
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            setPosts(postData.data)
            setLoading(false)
        } catch (err) {
            console.error('Erro ao buscar posts', err)
        }
    }


    useEffect(() => {
        getPosts()
    }, [])

    const handleSendPost = async (newPost: newPost) => {
        setLoading(true)
        try {
            await API.post(
                '/post/new',
                newPost,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            getPosts()
            setLoading(false)
        } catch (err) {
            console.error('Erro ao enviar post', err)
            setLoading(false)
        }
    }

    return (
        <div className={styles.container}>
            {loading && <Loading />}
            <FormNewPost placeholder='Publique alguma dúvida ou depoimento...' onAddPost={handleSendPost} />
            {posts.map((post) => (
                <CardPost post={post} key={post.id} />
            ))}
        </div>
    )
}