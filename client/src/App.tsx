import { SideProfile } from './components/SideProfile'
import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes/Routes'
import { Modal } from './modal'
import { useState } from 'react'
import { FormLogin } from './components/FormLogin'
import { FormSignUp } from './components/FormSignUp'
import { Loading } from './components/Loading'

function App() {

    const [loginModal, setLoginModal] = useState(false)
    const [signUpModal, setSignUpModal] = useState(false)
    const [loading, setLoading] = useState(false)

    return (
        <div>
            {loading && <Loading />}
            {
                loginModal && <Modal
                    title='Login'
                    closeModal={setLoginModal}>
                    <FormLogin setLoading={setLoading}/>
                </Modal>
            }

            {
                signUpModal && <Modal
                    title='Login'
                    closeModal={setSignUpModal}>
                    <FormSignUp />
                </Modal>
            }

            <div className={styles.container}>
                <Router>
                    <SideProfile
                        openLoginModal={setLoginModal}
                        openSingUpModal={setSignUpModal}
                        setLoading={setLoading}
                    />
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
        </div>
    )
}

export default App
