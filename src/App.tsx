import { SideProfile } from './components/SideProfile'
import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes/Routes'


function App() {
    return (
        <div className={styles.container}>
            <Router>
                <SideProfile />
                <main>
                    <Routes>
                        {routes.map((route) => {
                            const Component = route.component
                            return <Route key={route.path} path={route.path} element={<Component />} />
                        })}
                    </Routes>
                </main>
            </Router>
        </div>
    )
}

export default App
