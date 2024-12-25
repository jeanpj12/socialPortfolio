import styles from './styles.module.css'

type ProfileProps = {
    name: string
    status: string
    viewStatus?: boolean
}

export function ProfileBadge({name, status, viewStatus = true}: ProfileProps) {
    return <div className={styles.profileBadge}>
        <div className={styles.imageProfile}></div>
        <div>
            <strong>{name}</strong>
            {viewStatus && <span>{status}</span>}
        </div>
    </div>
}