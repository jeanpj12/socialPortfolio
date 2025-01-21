import styles from './styles.module.css'

export function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loader}>

            </div>
        </div>
    )
}