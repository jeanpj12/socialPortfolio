import { SideProfile } from './components/SideProfile'
import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes/Routes'


function App() {
    return (
        <div className={styles.container}>
            <Router>
                <SideProfile />
                <div className={styles.content}>
                    <Routes>
                        {routes.map((route) => {
                            const Component = route.component
                            return <Route key={route.path} path={route.path} element={<Component />} />
                        })}
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App
