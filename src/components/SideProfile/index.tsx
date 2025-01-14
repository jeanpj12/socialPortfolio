import styles from './styles.module.css'
import { ProfileBadge } from '../ProfleBadge'
import { Button } from '../Buttons/Button'
import { useNavigate, useLocation } from 'react-router-dom'
import { routes } from '../../routes/Routes'

export function SideProfile() {
    const navigate = useNavigate()
    const location = useLocation()

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
        </>
    }

    return <div className={styles.sideBar}>
        <div className={styles.profileContainer}>
            <ProfileBadge name='Jean Jr.' status='Developer' img='https://github.com/jeanpj12.png'/>
        </div>
        <div className={styles.buttonsPage}>
            <NavigateButton />
        </div>
    </div>
}