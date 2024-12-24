import styles from './styles.module.css'
import { ProfileBadge } from '../ProfleBadge'
import { Button } from '../Button'

export function SideProfile() {
    return <div className={styles.sideBar}>
        <div className={styles.profileContainer}>
            <ProfileBadge />
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione.
            </span>
        </div>
        <Button title='Feed' isActive = {true}/>
        <Button title='Portfólio'/>
        <Button title='Skills'/>
        <Button title='Contato'/>
    </div> 
}