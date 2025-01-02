import styles from './App.module.css'
import { SideProfile } from './components/SideProfile'
import { FormNewPost } from './components/FormNewPost'
import { CardPost } from './components/CardPost'
import { PostsProps } from './types/Post'
import { useState } from 'react'

function App() {

  const [posts, setPosts] = useState<PostsProps[]>([
    {
      id: 1032,
      user: {
        name: 'Robson Silva.',
        status: 'Empreendedor'
      },
      publishedAt: '2024-12-25T08:00:00Z',
      content: 'Ótimos serviços',
      comments: [
        {
          id: 32,
          user: {
            name: 'Jean Jr.',
            status: 'Dev Web'
          },
          publishedAt: '2024-12-25T08:00:00Z',
          comment: 'Muito Obrigado',
          replies: []
        }
      ]
    }
  ]
  )

  const handleSendPost = (newPost: PostsProps) => {
    setPosts((prevPosts) => [...prevPosts, newPost])
  }

  return (
    <div className={styles.container}>
      <SideProfile />
      <main>
        <FormNewPost placeholder='Publique alguma dúvida ou depoimento...' onAddPost={handleSendPost} />
        <CardPost posts={posts} />
      </main>
    </div>
  )
}

export default App
