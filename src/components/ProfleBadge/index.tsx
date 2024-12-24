import styles from './styles.module.css'

export function ProfileBadge() {
    return <div className={styles.profileBadge}>
        <div className={styles.imageProfile}></div>
        <div>
            <strong>UserName</strong>
            <span>Status</span>
        </div>
    </div>
}