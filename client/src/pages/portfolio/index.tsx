import styles from './styles.module.css'
import { CardPost } from '../../components/CardPost'
import { getPosts } from '../../services/getPosts'
import { useEffect, useState } from 'react'
import { PostsProps } from '../../types/Post'
import { Loading } from '../../components/Loading'
import { API } from '../../services/APIService'

export function Portfolio() {

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
    
                setPosts(postData.data.filter((post: any) => post.typePost == 'portfolio'))
                setLoading(false)
            } catch (err) {
                console.error('Erro ao buscar posts', err)
                setLoading(false)
            }
        }
    
    useEffect(()=>{
        getPosts()
    }, [])


    return (
        <div className={styles.container}>
            {loading && <Loading />}
            <CardPost posts={posts} />
        </div>
    )
}