import styles from './styles.module.css'
import { ProfileBadge } from '../ProfleBadge'
import { Button } from '../Buttons/Button'
import { useNavigate, useLocation } from 'react-router-dom'
import { routes } from '../../routes/Routes'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import { useUser } from '../../contexts/UserContext';


type Props = {
    openLoginModal: React.Dispatch<React.SetStateAction<boolean>>
    openSingUpModal: React.Dispatch<React.SetStateAction<boolean>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export function SideProfile({ openLoginModal, openSingUpModal, setLoading }: Props) {
    const cookies = new Cookies();
    const { logout, user } = useUser()
    const navigate = useNavigate()
    const location = useLocation()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        cookies.get('jwt') ? setIsLoggedIn(true) : setIsLoggedIn(false)
    }, [cookies])

    const handleLogout = () => {
        cookies.remove('jwt')
        logout()
        setLoading(true)
        window.location.href = '/'
    }


    function NavigateButton() {
        return <>
            {routes.map((route) => (
                <Button
                    key={route.path}
                    title={route.title}
                    onClick={() => navigate(route.path)}
                    isActive={location.pathname === route.path ? true : false}
                />
            ))
            }

            {!isLoggedIn ?
                <div className={styles.doubleCol}>
                    <Button
                        key='login'
                        title='Login'
                        variation={2}
                        onClick={() => openLoginModal(true)}
                    />

                    <Button
                        key='Sign up'
                        title='Sign up'
                        variation={2}
                        onClick={() => openSingUpModal(true)}
                    />
                </div> : <div className={styles.doubleCol}>
                    <Button
                        key='Perfil'
                        title='Perfil'
                        variation={2}
                        onClick={() => openLoginModal(true)}
                    />

                    <Button
                        key='Sair'
                        title='Sair'
                        variation={2}
                        onClick={handleLogout}
                    />
                </div>
            }
        </>
    }

    return <div className={styles.sideBar}>
            <div className={styles.profileContainer}>
                <ProfileBadge name={`${user?.name} ${user?.surname}` || 'Jean Jr.'} status={user?.status || 'Developer'} img='https://github.com/jeanpj12.png' />
            </div>
            <div className={styles.buttonsPage}>
                <NavigateButton />
            </div>
        </div>
}