import styles from './styles.module.css'
import imgProfile from '../../assets/imgProfile.jpg'

type ProfileProps = {
    img?: string
    name: string
    status: string
    viewStatus?: boolean
}

export function ProfileBadge({name, status, viewStatus = true, img}: ProfileProps) {
    return <div className={styles.profileBadge}>
        {img ? <img src={img} className={styles.imageProfile}/> : <img src={imgProfile} className={styles.imageProfile}/>}
        <div>
            <strong>{name}</strong>
            {viewStatus && <span>{status}</span>}
        </div>
    </div>
}