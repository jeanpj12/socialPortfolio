import { SideProfile } from './components/SideProfile'
import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes/Routes'
import { Modal } from './modal'
import { useState } from 'react'
import { FormLogin } from './components/FormLogin'
import { FormSignUp } from './components/FormSignUp'

function App() {

    const [loginModal, setLoginModal] = useState(false)
    const [signUpModal, setSignUpModal] = useState(false)

    return (
        <div>
            {
                loginModal && <Modal
                    title='Login'
                    closeModal={setLoginModal}>
                    <FormLogin />
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
