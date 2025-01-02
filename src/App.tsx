import styles from './App.module.css'
import { SideProfile } from './components/SideProfile'
import { FormNewPost } from './components/FormNewPost'
import { CardPost } from './components/CardPost'

function App() {

  const post = [
    {
      id: 1032,
      user: {
        name: 'Jean Jr.',
        status: 'Dev Web'
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

  return (
    <div className={styles.container}>
      <SideProfile />
      <main>
        <FormNewPost placeholder='Publique alguma dúvida ou depoimento...' />
        <CardPost posts={post} />
      </main>
    </div>
  )
}

export default App
