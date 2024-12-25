import styles from './App.module.css'
import { SideProfile } from './components/SideProfile'
import { SideAds } from './components/SideAds'
import { FormNewPost } from './components/FormNewPost'
import { CardPost } from './components/CardPost'

function App() {
  return (
    <div className={styles.container}>
      <SideProfile />
      <main>
      <FormNewPost placeholder='Publique alguma dúvida ou depoimento...'/>
      <CardPost />
      </main>
      <SideAds />
    </div>
  )
}

export default App
