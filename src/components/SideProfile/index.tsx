import styles from './styles.module.css'
import { ProfileBadge } from '../ProfleBadge'
import { Button } from '../Buttons/Button'

export function SideProfile() {
    return <div className={styles.sideBar}>
        <div className={styles.profileContainer}>
            <ProfileBadge name='Jean Jr.' status='Dev Web'/>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione.
            </span>
        </div>
        <div className={styles.buttonsPage}>
            <Button title='Feed' isActive={true} />
            <Button title='Portfólio' />
            <Button title='Skills' />
            <Button title='Contato' />
        </div>
    </div>
}